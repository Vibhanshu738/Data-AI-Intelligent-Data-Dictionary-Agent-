import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TableDetails from "../components/TableDetails";
import HealthCard from "../components/HealthCard";
import ChatPanel from "../components/ChatPanel";
import { databaseSchema } from "../services/api";

const Dashboard = () => {
  const [activeTable, setActiveTable] = useState("users");

  const currentData = databaseSchema[activeTable];

  return (
    <div className="flex h-screen">
      <Sidebar
        tables={Object.keys(databaseSchema)}
        activeTable={activeTable}
        onChange={setActiveTable}
      />

      <div className="flex-1 p-6 bg-gray-50">
        <TableDetails tableName={activeTable} data={currentData} />
        <HealthCard health={currentData.health} />
        <ChatPanel tableName={activeTable} />
      </div>
    </div>
  );
};

export default Dashboard;