import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* default route if no other matches */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default index;
