import React from "react";

const Sidebar = ({ tables, activeTable, onChange }) => {
  return (
    <div className="w-[250px] bg-gray-100 p-4">
      <h2 className="font-bold mb-4">Database Tables</h2>
      {tables.map((table) => (
        <button
          key={table}
          onClick={() => onChange(table)}
          className={`block w-full text-left p-2 mb-2 rounded 
            ${activeTable === table ? "bg-blue-500 text-white" : "bg-white"}
          `}
        >
          {table}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;