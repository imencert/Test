import React from "react";
import "./List.scss";
import ListItem from "./ListItem";

const List = ({ data }) => {
  const renderList = data.map((item, index) => {
    return <ListItem key={index} label={item.label} content={item.content} />;
  });

  return <ul className="List">{renderList}</ul>;
};

export default List;
