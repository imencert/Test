import React from "react";
import "./TableHeader.scss";

const TableHeader = ({ data }) => {
  const renderTableHeader = data.map((value, index) => {
    return <th key={index}>{value}</th>;
  });

  return (
    <thead className="Table__Header">
      <tr>{renderTableHeader}</tr>
    </thead>
  );
};

export default TableHeader;
