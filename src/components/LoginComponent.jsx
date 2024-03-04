import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";
import { useEffect } from "react";
import { login as loginApi, issueAccessToken } from "../apis/auth";

const LoginComponent = () => {
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 액션 디스패치 함수 가져오기
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // useSelector 훅을 사용하여 Redux 상태 가져오기

  useEffect(() => {
    let isMounted = true;

    const checkLoginStatus = async () => {
      try {
        const response = await loginApi(); // 로그인 API 호출
        if (isMounted) {
          // 컴포넌트가 마운트된 상태일 때만 상태 업데이트
          if (response.status === 200) {
            console.log("로그인 API 호출", response.data);

            // 로그인 상태인 경우에 Access Token 재발급
            if (!isLoggedIn) {
              dispatch(login());
              await handleAccessTokenIssue();
            }
          } else if (response.status === 401) {
            console.error("로그인 API 오류");
            dispatch(logout());
            handleAccessTokenIssue(); // 401(Access Token이 만료)일 때 재발급
          }
        }
      } catch (error) {
        console.error("로그인 API 오류:", error);
        dispatch(logout());
      }
    };

    checkLoginStatus();

    return () => {
      // 클린업 함수: 컴포넌트가 Unmount될 때 호출
      isMounted = false;
    };
  }, [dispatch, isLoggedIn]);

  // 로그인 버튼 클릭 시 로그인 API 호출
  const handleLogin = async () => {
    try {
      const response = await loginApi();

      if (response.status === 200) {
        console.log("로그인 API 호출", response.data);
        dispatch(login()); // login 액션 디스패치
        await handleAccessTokenIssue();
      } else if (response.status === 401) {
        console.error("로그인 API 오류");
        dispatch(logout());
        handleAccessTokenIssue();
      }
    } catch (error) {
      console.error("로그인 API 오류:", error);
      dispatch(logout());
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // logout 액션 디스패치
  };

  const handleAccessTokenIssue = async () => {
    try {
      const accessTokenResponse = await issueAccessToken();

      if (accessTokenResponse && accessTokenResponse.isSuccess) {
        console.log("Access Token이 재발급되었습니다.", accessTokenResponse);
      } else {
        console.error("Access Token 재발급 실패");
      }
    } catch (error) {
      console.error("Access Token 재발급 오류:", error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )}
    </div>
  );
};

export default LoginComponent;
