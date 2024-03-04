import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login/Login";
import Signup from "./pages/Home/Signup/Signup";
import Service from "./pages/Home/Signup/TermsAgreement/Service";
import Privacy from "./pages/Home/Signup/TermsAgreement/Privacy";
import RecentFunding from "./pages/Home/RecentFunding/RecentFunding";
import RecentFundingProgress from "./pages/Home/RecentFunding/RecentFundingProgress";
import RecentFundingComplete from "./pages/Home/RecentFunding/RecentFundingComplete";
import Notification from "./pages/Home/Notification/Notification";
import FundingCreate from "./pages/Funding/FundingCreate/FundingCreate";
import FundingDetail from "./pages/Funding/FundingDetail/FundingDetail";
import Sponsor from "./pages/Funding/FundingDetail/Sponsor/Sponsor";
import FundingModify from "./pages/Funding/FundingModify/FundingModify";
import FundingPay from "./pages/Funding/FundingPay/FundingPay";
import { useSelector } from "react-redux";
import NotificationComponent from "./components/NotificationComponent";
import Product from "./pages/Home/Product/Product";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kakao/callback" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/service" element={<Service />} />
        <Route path="/signup/privacy" element={<Privacy />} />
        <Route path="/recentfunding" element={<RecentFunding />} />
        <Route
          path="/recentfunding/progress"
          element={<RecentFundingProgress />}
        />
        <Route
          path="/recentfunding/complete"
          element={<RecentFundingComplete />}
        />
        <Route path="/notification" element={<Notification />} />
        <Route path="/fundingcreate" element={<FundingCreate />} />
        <Route path="/fundingdetail/:id" element={<FundingDetail />} />
        <Route path="/fundingsponsordetail/:id" element={<Sponsor />} />
        <Route path="/fundingmodify/:id" element={<FundingModify />} />
        <Route path="/fundingpay/:id" element={<FundingPay />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
        {/* isLoggedIn이 true일 때만 NotificationComponent 렌더링 */}
        {isLoggedIn && <Route path="*" element={<NotificationComponent />} />}
      </Routes>
    </Router>
  );
}

export default App;
