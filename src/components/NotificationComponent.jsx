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

import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

function NotificationComponent() {
  // 기존 상태 관리 코드
  const [listening, setListening] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);

  useEffect(() => {
    if (!listening && isLoggedIn) {
      // useRef의 current 속성을 통해 eventSource 인스턴스 생성 및 할당
      eventSource.current = new EventSource(
        `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
        { withCredentials: true }
      );
      // SSE 연결이 성공적으로 열렸을 때
      eventSource.current.onopen = (event) => {
        console.log("Connection to SSE opened");
        setListening(true);
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
        setListening(false);
      };
      // 컴포넌트 언마운트 시 또는 리렌더링 전에 SSE 연결 종료
      return () => {
        if (eventSource.current) {
          eventSource.current.close();
        }
        setListening(false);
      };
    }
  }, [isLoggedIn, listening]); // 의존성 배열에 isLogin 추가
  return (
    <div>
      <h1>SSE 연결 예제</h1>
    </div>
  );
}
export default NotificationComponent;
