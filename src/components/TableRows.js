import React from "react";
import "./TableRows.scss";

const TableRows = ({ data }) => {
  const renderTableRows = data.map((value, index) => {
    const valueProps = Object.keys(value);
    const renderTableCells = valueProps.map((prop, index) => {
      return <td key={index}>{value[prop]}</td>;
    });
    return <tr key={index}>{renderTableCells}</tr>;
  });

  return <tbody className="Table__Row">{renderTableRows}</tbody>;
};

export default TableRows;
