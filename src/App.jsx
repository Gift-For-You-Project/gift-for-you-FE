import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login/Login";
import Signup from "./pages/Home/Signup/Signup";
import OngoingFunding from "./pages/Home/OngoingFunding/OngoingFunding";
import FundingCreate from "./pages/Funding/FundingCreate/FundingCreate";
import FundingDetail from "./pages/Funding/FundingDetail/FundingDetail";
import Sponsor from "./pages/Funding/FundingDetail/Sponsor/Sponsor";
import FundingModify from "./pages/Funding/FundingModify/FundingModify";
import FundingPay from "./pages/Funding/FundingPay/FundingPay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kakao/callback" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ongoingfunding" element={<OngoingFunding />} />
        <Route path="/fundingcreate" element={<FundingCreate />} />
        <Route path="/fundingdetail/:id" element={<FundingDetail />} />
        <Route path="/fundingsponsordetail" element={<Sponsor />} />
        <Route path="/fundingmodify/:id" element={<FundingModify />} />
        <Route path="/fundingpay/:id" element={<FundingPay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
