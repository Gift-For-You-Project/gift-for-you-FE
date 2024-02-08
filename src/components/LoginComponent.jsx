import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

const LoginComponent = () => {
  const dispatch = useDispatch(); // useDispatch 훅을 사용하여 액션 디스패치 함수 가져오기
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // useSelector 훅을 사용하여 Redux 상태 가져오기

  const handleLogin = () => {
    dispatch(login()); // login 액션 디스패치
  };

  const handleLogout = () => {
    dispatch(logout()); // logout 액션 디스패치
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
