import React from "react";
import "./ListItem.scss";

const ListItem = ({ label, content }) => {
  return (
    <li className="ListItem">
      <span className="ListItem__Label">{label}: </span>
      {content}
    </li>
  );
};

export default ListItem;
