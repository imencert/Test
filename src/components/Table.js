import React from "react";
import "./Table.scss";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

const Table = ({ data }) => {
  const { tableHeaderData, tableRowsData } = data;
  return (
    <table className="Table">
      <TableHeader data={tableHeaderData} />
      <TableRows data={tableRowsData} />
    </table>
  );
};

export default Table;
