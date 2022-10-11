import React from "react";
import Header from "./UI/Header";

const PageWrapper = function ({ children }) {
  return (
    <div className="w-screen h-screen bg-white">
      <Header />
      <div className="flex justify-center mt-10">{children}</div>
    </div>
  );
};

export default PageWrapper;
