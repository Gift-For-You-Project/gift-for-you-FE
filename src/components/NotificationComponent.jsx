import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { infoToast } from "./toast";

function NotificationComponent() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  // SSE 연결을 설정하는 함수
  const initializeEventSource = () => {
    eventSource.current = new EventSource(
      `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
      {
        withCredentials: true,
      }
    );

    eventSource.current.onopen = () => {
      console.log("SSE Connection opened.");
      setIsConnected(true); // 연결 상태를 true로 설정합니다.
    };

    eventSource.current.onmessage = (event) => {
      console.log("New data received:", JSON.parse(event.data));
      const { data } = event;
      const noti = JSON.parse(data);
      infoToast(noti.message);
    };

    eventSource.current.onerror = () => {
      console.error("SSE Connection error");
      if (eventSource.current) eventSource.current.close();
      setIsConnected(false); // 연결 상태를 false로 설정합니다.

      // 일정 시간 후 재연결 시도
      setTimeout(() => {
        if (isLoggedIn && !isConnected) {
          initializeEventSource(); // EventSource 재초기화 및 연결 재시도
        }
      }, 3000);
    };
  };

  useEffect(() => {
    // 이미 연결되어 있거나 로그인 상태가 아니면 아무것도 하지 않습니다.
    if (isConnected || !isLoggedIn) return;

    initializeEventSource(); // SSE 연결을 초기화하고 설정합니다.

    // 컴포넌트 언마운트 또는 로그아웃 시 SSE 연결을 종료합니다.
    return () => {
      if (eventSource.current) {
        eventSource.current.close();
        setIsConnected(false); // 연결 상태를 false로 설정합니다.
      }
    };
    // eslint-disable-next-line
  }, [isLoggedIn]);

  return <img src="/imgs/Home/no-notification.svg" alt="notification" />;
}

export default NotificationComponent;
