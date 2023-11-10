import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <h1>sidebar</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
