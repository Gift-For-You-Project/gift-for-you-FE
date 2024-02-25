import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login/Login";
import Signup from "./pages/Home/Signup/Signup";
import Service from "./pages/Home/Signup/TermsAgreement/Service";
import Privacy from "./pages/Home/Signup/TermsAgreement/Privacy";
import Marketing from "./pages/Home/Signup/TermsAgreement/Marketing";
import RecentFunding from "./pages/Home/RecentFunding/RecentFunding";
import RecentFundingProgress from "./pages/Home/RecentFunding/RecentFundingProgress";
import RecentFundingComplete from "./pages/Home/RecentFunding/RecentFundingComplete";
import FundingCreate from "./pages/Funding/FundingCreate/FundingCreate";
import FundingDetail from "./pages/Funding/FundingDetail/FundingDetail";
import Sponsor from "./pages/Funding/FundingDetail/Sponsor/Sponsor";
import FundingModify from "./pages/Funding/FundingModify/FundingModify";
import FundingPay from "./pages/Funding/FundingPay/FundingPay";

function App() {
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
        <Route path="/signup/marketing" element={<Marketing />} />
        <Route path="/recentfunding" element={<RecentFunding />} />
        <Route
          path="/recentfunding/progress"
          element={<RecentFundingProgress />}
        />
        <Route
          path="/recentfunding/complete"
          element={<RecentFundingComplete />}
        />
        <Route path="/fundingcreate" element={<FundingCreate />} />
        <Route path="/fundingdetail/:id" element={<FundingDetail />} />
        <Route path="/fundingsponsordetail/:id" element={<Sponsor />} />
        <Route path="/fundingmodify/:id" element={<FundingModify />} />
        <Route path="/fundingpay/:id" element={<FundingPay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
