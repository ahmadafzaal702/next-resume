import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-8 sm:p-12">{children}</div>;
};

export default Wrapper;
