import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container relative z-10 backdrop-blur-md bg-white/5 border border-white/10 shadow-md rounded-3xl px-6 py-10 flex justify-center items-center text-white">
        <p className="text-sm sm:text-base text-gray-400 text-center">
          © {new Date().getFullYear()}. All rights reserved. Built with ❤️ by{" "}
          <span className="text-blue-400 font-semibold">Deepansh</span>
        </p>
      </div>
    </Section>
  );
};

export default Footer;