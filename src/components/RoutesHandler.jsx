import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Result } from "./Result";

export const RoutesHandler = ({ darkTheme }) => {
  return (
    <div className="p4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route
          exact
          path="/search"
          element={<Result darkTheme={darkTheme} />}
        />
        <Route
          exact
          path="/images"
          element={<Result darkTheme={darkTheme} />}
        />
        <Route
          exact
          path="/videos"
          element={<Result darkTheme={darkTheme} />}
        />
        <Route exact path="/news" element={<Result darkTheme={darkTheme} />} />
      </Routes>
    </div>
  );
};
