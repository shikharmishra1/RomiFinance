import React from "react";
import Navbar from "components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/Home";
import Dashboard from "components/Dashboard";
import Earn from "components/Earn";
import Footer from "components/Footer";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar /> {/* Include the Navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* This route renders at /Home/ */}
        <Route path="/dashboard" element={<Dashboard/>} /> {/* This route renders at /Dashboard/ */}
        <Route path="/earn" element={<Earn/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
