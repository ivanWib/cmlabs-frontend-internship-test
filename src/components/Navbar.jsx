import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[rgba(14,14,14,0.5)] shadow-lg backdrop-blur-md border-opacity-18 border border-solid border-white rounded-2xl p-3 mt-3">
      <NavLink to="/">
        <p className="text-2xl md:text-4xl font-bold text-center">mealapp</p>
      </NavLink>
    </div>
  );
}

export default Navbar;
