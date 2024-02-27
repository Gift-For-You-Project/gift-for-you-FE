import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const NotificationComponent = () => {
  const [events, setEvents] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    // 로그인 상태인 경우에만 SSE 연결 설정
    if (isLoggedIn) {
      const source = axios.CancelToken.source();

      // SSE 연결 설정
      const eventSource = new EventSource("/api/notification/subscribe", {
        cancelToken: source.token,
      });

      eventSource.onmessage = (event) => {
        const eventData = JSON.parse(event.data);
        setEvents((prevEvents) => [...prevEvents, eventData]);
      };

      eventSource.onerror = (error) => {
        console.error("SSE 에러:", error);
      };

      return () => {
        eventSource.close();
        source.cancel("Request canceled");
      };
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h2>Notification Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{JSON.stringify(event)}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;
