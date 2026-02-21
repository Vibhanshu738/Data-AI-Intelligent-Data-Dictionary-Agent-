import React from "react";

const TableDetails = ({ tableName, data }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="font-bold mb-2">Schema: {tableName}</h3>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Column</th>
            <th className="border p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {data.columns.map((col, index) => (
            <tr key={index}>
              <td className="border p-2">{col.name}</td>
              <td className="border p-2">{col.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetails;