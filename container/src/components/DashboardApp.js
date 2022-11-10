import React, { useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

export const DashboardApp = () => {
  useEffect(() => {
    mount();
  }, []);
  return (
    <div className="left-sidebar-module">
      <app-root></app-root>
    </div>
  );
};
