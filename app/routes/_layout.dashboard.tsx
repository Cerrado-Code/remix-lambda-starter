import React from "react";
import NavigationBar from "../components/pages/navigation/navbar/navbar";
import Dashboard from "../components/pages/dashboard/dashboard";

export default function RouteDashboard() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <NavigationBar />
      </div>
      <div className="container w-4/6 pt-5">
        <Dashboard />
      </div>
    </div>
  );
}
