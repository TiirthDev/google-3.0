import React from "react";

export const Footer = ({ darkTheme }) => {
  return (
    <div
      className={
        darkTheme
          ? "text-center p-10 mt-10 border-t border-gray-700"
          : "text-center p-10 mt-10 border-t border-gray-200"
      }
    >
      <h1>2021 Google, Inc.</h1>
    </div>
  );
};
