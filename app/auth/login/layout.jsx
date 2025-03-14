import React from "react";

const layout = ({ children }) => {
  return (
    <div className="h-screen bg-linear-to-r flex from-[#101559] to-[#1965A3]">
      {children}
    </div>
  );
};

export default layout;
