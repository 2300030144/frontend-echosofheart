import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/Signup";
import ExploreArt from "./components/ExploreArt";
import Dashboard from "./components/Dashboard"; // Add Dashboard import
import "./index.css"; // Ensure global styles if needed
import Signup from "./components/Signup";
import Login from "./components/Login";
import VirtualSpace from "./components/VirtualSpace";
import AuctionCard from "./components/AuctionCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<ExploreArt />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/virtualspace" element={<VirtualSpace />} />
      <Route path="/auctioncard" element={<AuctionCard />} />
 
    </Routes>
  </Router>
);
