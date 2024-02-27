import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListening } from "../redux/notificationSlice";

function NotificationComponent() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);
  const dispatch = useDispatch();
  const { listening } = useSelector((state) => state.notification);

  useEffect(() => {
    if (!listening && isLoggedIn) {
      // useRef의 current 속성을 통해 eventSource 인스턴스 생성 및 할당
      eventSource.current = new EventSource(
        `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
        { withCredentials: true }
      );
      // SSE 연결이 성공적으로 열렸을 때
      eventSource.current.onopen = (event) => {
        console.log("Connection to SSE opened", event);
        dispatch(setListening(true));
      };
      // 서버로부터 메시지를 받았을 때
      eventSource.current.onmessage = (event) => {
        const newData = JSON.parse(event.data);
        console.log("New data received:", newData);
        // 필요한 상태 업데이트 또는 로직 처리
      };
      // SSE 연결에 에러가 발생했을 때
      eventSource.current.onerror = (event) => {
        console.error("SSE connection error:", event);
        if (eventSource.current) {
          eventSource.current.close();
        }
        dispatch(setListening(false));
      };
      // 컴포넌트 언마운트 시 또는 리렌더링 전에 SSE 연결 종료
      return () => {
        if (eventSource.current) {
          eventSource.current.close();
        }
        dispatch(setListening(false));
      };
    }
  }, [dispatch, listening, isLoggedIn]);
  return <img src="/imgs/Home/no-notification.svg" alt="notification" />;
}
export default NotificationComponent;
