import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "./redux/navigationSlice";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
import FundingCreate from "./pages/Funding/FundingCreate/FundingCreate";
import FundingDetail from "./pages/Funding/FundingDetail/FundingDetail";
import FundingSponsorDetail from "./pages/Funding/FundingSponsorDetail/FundingSponsorDetail";
import FundingModify from "./pages/Funding/FundingModify/FundingModify";
import FundingPay from "./pages/Funding/FundingPay/FundingPay";

const links = [
  { path: "/" },
  { path: "/login" },
  { path: "/signup" },
  { path: "/fundingcreate" },
  { path: "/fundingdetail" },
  { path: "/fundingsponsordetail" },
  { path: "/fundingmodify" },
  { path: "/fundingpay" },
  // 새로운 링크 추가하는 곳
];

function App() {
  const dispatch = useDispatch();
  const handleLinkClick = (path) => {
    dispatch(setCurrentPage(path));
  };

  return (
    <Router>
      <div>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => handleLinkClick(link.path)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fundingcreate" element={<FundingCreate />} />
        <Route path="/fundingdetail" element={<FundingDetail />} />
        <Route path="/fundingsponsordetail" element={<FundingSponsorDetail />} />
        <Route path="/fundingmodify" element={<FundingModify />} />
        <Route path="/fundingpay" element={<FundingPay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
