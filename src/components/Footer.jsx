import React from "react";
import instagram from "../assets/instagram.svg";
import linkind from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";

function Footer() {
  return (
    <div className="bg-[rgba(14,14,14,0.5)] shadow-lg backdrop-blur-md border-opacity-18 border border-solid border-white rounded-2xl p-3 md:p-6 mt-3">
      <p className="text-base md:text-2xl text-center">
        Made by Christian Ivan Wibowo
      </p>
      <div className="flex flex-row justify-between w-1/2 md:w-1/4 mx-auto mt-3 gap-3">
        <div className="w-10">
          <a href="https://www.instagram.com/ivan_wib/">
            <img src={instagram} alt="" />
          </a>
        </div>

        <div className="w-10">
          <a href="https://www.linkedin.com/in/christian-ivan-wibowo-94ba36184/">
            <img src={linkind} alt="" />
          </a>
        </div>

        <div className="w-10">
          <a href="https://github.com/ivanWib">
            <img src={github} alt="" />
          </a>
        </div>

        <div className="w-10">
          <a href="mailto:christ.ivan5758@gmail.com">
            <img src={email} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
