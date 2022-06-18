import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/images", text: "📸 Images" },
  { url: "/videos", text: "📺 Videos" },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between mt-4 items-center">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 border-blue-700 pb-2 m-3 mb-0"
              : "border-b-0 pb-2 m-3 mb-0"
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
