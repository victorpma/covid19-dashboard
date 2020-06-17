import React from "react";

const Table = ({ columns, data }: { columns: any; data: any }) => {
  const keys = Object.keys(columns);
  const records = Object.keys(data);

  console.log(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th>{columns[key]}</th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Table;
