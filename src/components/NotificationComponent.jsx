// import React, { useEffect, useState, useRef } from "react";
// import { useSelector } from "react-redux";
// import { infoToast } from "./toast";
// import { ToastContainer } from "react-toastify";

// function NotificationComponent() {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const eventSource = useRef(null);
//   const [isConnected, setIsConnected] = useState(false);

//   useEffect(() => {
//     const initializeEventSource = () => {
//       eventSource.current = new EventSource(
//         `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
//         {
//           withCredentials: true,
//         }
//       );

//       eventSource.current.onopen = () => {
//         console.log("SSE Connection opened.");
//         setIsConnected(true);
//       };

//       eventSource.current.addEventListener("sse", (event) => {
//         const data = JSON.parse(event.data);
//         console.log("SSE data received:", data);
//         infoToast(data.message);
//       });

//       eventSource.current.onerror = () => {
//         console.error("SSE Connection error");
//         if (eventSource.current) eventSource.current.close();
//         setIsConnected(false);

//         setTimeout(() => {
//           if (isLoggedIn && !isConnected) {
//             initializeEventSource();
//           }
//         }, 3000);
//       };
//     };

//     if (isLoggedIn && !isConnected) {
//       initializeEventSource();
//     }

//     return () => {
//       if (eventSource.current) {
//         eventSource.current.close();
//         setIsConnected(false);
//       }
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoggedIn]);

//   return (
//     <div>
//       <img src="/imgs/Home/no-notification.svg" alt="notification" />
//       <ToastContainer />
//     </div>
//   );
// }

// export default NotificationComponent;

import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { infoToast } from "./toast";
import { ToastContainer } from "react-toastify";

function NotificationComponent() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const eventSource = useRef(null);
  const [unreadNotification, setUnreadNotification] = useState(false);

  useEffect(() => {
    const initializeEventSource = () => {
      eventSource.current = new EventSource(
        `${process.env.REACT_APP_API_URL}/api/notification/subscribe`,
        {
          withCredentials: true,
        }
      );

      eventSource.current.onopen = () => {
        console.log("SSE Connection opened.");
      };

      eventSource.current.addEventListener("sse", (event) => {
        const data = JSON.parse(event.data);
        console.log("SSE data received:", data);
        infoToast(data.message);
        setUnreadNotification(true);
      });

      eventSource.current.onerror = () => {
        console.error("SSE Connection error");
        if (eventSource.current) eventSource.current.close();
      };
    };

    if (isLoggedIn) {
      initializeEventSource();
    }

    return () => {
      if (eventSource.current) {
        eventSource.current.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <div>
      {unreadNotification ? (
        <img src="/imgs/Home/notification.svg" alt="notification" />
      ) : (
        <img src="/imgs/Home/no-notification.svg" alt="notification" />
      )}
      <ToastContainer />
    </div>
  );
}

export default NotificationComponent;
