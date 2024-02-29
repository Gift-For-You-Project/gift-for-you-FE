import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { infoToast } from "./toast";

function NotificationComponent() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  const handleSSEMessage = (event) => {
    console.log("New data received:", JSON.parse(event.data));
    const { data } = event;
    const noti = JSON.parse(data);
    infoToast(noti.message);
  };

  const initializeEventSource = () => {
    eventSource.current = new EventSource(
      `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
      {
        withCredentials: true,
      }
    );

    eventSource.current.onopen = () => {
      console.log("SSE Connection opened.");
      setIsConnected(true);
    };

    eventSource.current.onmessage = (event) => handleSSEMessage(event);

    eventSource.current.onerror = () => {
      console.error("SSE Connection error");
      if (eventSource.current) eventSource.current.close();
      setIsConnected(false);

      setTimeout(() => {
        if (isLoggedIn && !isConnected) {
          initializeEventSource();
        }
      }, 3000);
    };
  };

  useEffect(() => {
    if (isConnected || !isLoggedIn) return;

    initializeEventSource();

    return () => {
      if (eventSource.current) {
        eventSource.current.close();
        setIsConnected(false);
        // eventSource.current.onmessage = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return <img src="/imgs/Home/no-notification.svg" alt="notification" />;
}

export default NotificationComponent;
