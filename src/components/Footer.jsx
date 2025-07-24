import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-6 mt-5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Saifuddin Khan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
