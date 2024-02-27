// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const NotificationComponent = () => {
//   const [events, setEvents] = useState([]);
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   useEffect(() => {
//     // 로그인 상태인 경우에만 SSE 연결 설정
//     if (isLoggedIn) {
//       console.log("NotificationComponent is rendered.");
//       const source = axios.CancelToken.source();

//       // SSE 연결 설정
//       const eventSource = new EventSource(
//         `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
//         {
//           withCredentials: true,
//         }
//       );

//       eventSource.onmessage = (event) => {
//         const eventData = JSON.parse(event.data);
//         setEvents((prevEvents) => [...prevEvents, eventData]);
//       };

//       eventSource.onerror = (error) => {
//         console.error("SSE 에러:", error);
//       };

//       return () => {
//         eventSource.close();
//         source.cancel("Request canceled");
//       };
//     }
//     console.log("NotificationComponent is rendered.");
//   }, [isLoggedIn]);

//   return (
//     <div>
//       <h2>Notification Events</h2>
//       <ul>
//         {events.map((event, index) => (
//           <li key={index}>{JSON.stringify(event)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NotificationComponent;

import React, { useEffect } from "react";
function NotificationComponent() {
  useEffect(() => {
    // SSE 연결 설정
    const eventSource = new EventSource(
      "http://api.giftipie.me/api/notification/subscribe"
    );

    // SSE 연결이 열렸을 때 실행할 코드
    eventSource.onopen = () => {
      console.log("SSE connection opened successfully");
    };

    // 서버로부터 수신된 메시지 처리
    eventSource.onmessage = (event) => {
      console.log("Received event:", event.data);
    };

    // 오류 처리
    eventSource.onerror = (error) => {
      console.error("EventSource failed:", error);
      eventSource.close();
    };

    // 컴포넌트 언마운트 시 연결 종료
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>SSE 연결 예제</h1>
    </div>
  );
}
export default NotificationComponent;
