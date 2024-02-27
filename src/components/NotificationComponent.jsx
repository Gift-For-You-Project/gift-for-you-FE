import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

function NotificationComponent() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // 이미 연결되어 있거나 로그인 상태가 아니면 아무것도 하지 않습니다.
    if (isConnected || !isLoggedIn) return;

    eventSource.current = new EventSource(
      `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
      { withCredentials: true }
    );

    eventSource.current.onopen = () => {
      console.log("SSE Connection opened.");
      setIsConnected((prevIsConnected) => !prevIsConnected); // 이전 상태값을 이용하여 변경
    };

    eventSource.current.onmessage = (event) => {
      console.log("New data received:", JSON.parse(event.data));
    };

    eventSource.current.onerror = (error) => {
      console.error("SSE Connection error:", error);
      eventSource.current.close();
      setIsConnected((prevIsConnected) => !prevIsConnected); // 이전 상태값을 이용하여 변경
    };

    // 컴포넌트 언마운트 또는 로그아웃 시 SSE 연결을 종료합니다.
    return () => {
      if (eventSource.current) {
        eventSource.current.close();
        setIsConnected((prevIsConnected) => !prevIsConnected); // 이전 상태값을 이용하여 변경
      }
    };
  }, [isLoggedIn, isConnected]); // isConnected를 의존성 배열에 추가

  return <img src="/imgs/Home/no-notification.svg" alt="notification" />;
}

export default NotificationComponent;
