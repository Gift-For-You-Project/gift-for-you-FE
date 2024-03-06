import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { infoToast } from "./toast";

function NotificationComponent() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [readNoti, setReadNoti] = useState(false);

  useEffect(() => {
    // EventSource 초기화 함수
    const initializeEventSource = () => {
      eventSource.current = new EventSource(
        `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
        {
          withCredentials: true,
        }
      );

      // SSE 연결이 열렸을 때 처리
      eventSource.current.onopen = () => {
        setIsConnected(true);
      };

      // SSE 메시지 수신 이벤트 핸들러
      eventSource.current.addEventListener("sse", (event) => {
        const data = JSON.parse(event.data);
        infoToast(data.message);
      });

      // SSE 연결 오류 처리
      eventSource.current.onerror = () => {
        console.error("SSE Connection error");
        if (eventSource.current) eventSource.current.close();
        setIsConnected(false);

        // 3초 후에 재시도
        setTimeout(() => {
          if (isLoggedIn && !isConnected) {
            initializeEventSource();
          }
        }, 3000);
      };
    };

    // 로그인 상태이고 연결이 되어있지 않으면 SSE 초기화
    if (isLoggedIn && !isConnected) {
      initializeEventSource();
    }

    return () => {
      if (eventSource.current) {
        eventSource.current.close();
        setIsConnected(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const handleReadNotification = () => {
    // 알림을 읽음 상태로 변경
    setReadNoti(true);
  };

  return (
    <div onClick={handleReadNotification}>
      {readNoti ? (
        <img src="/imgs/Home/no-notification.svg" alt="no-notification" />
      ) : (
        <img src="/imgs/Home/notification.svg" alt="notification" />
      )}
    </div>
  );
}

export default NotificationComponent;
