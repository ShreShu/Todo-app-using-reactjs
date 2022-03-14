import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Todo.css";

export const Todo = ({ todo }) => {
  return (
    <List className="todo_list">
      <ListItem alignItems="flex-start">
        <ListItemText primary="TODO" secondary={todo} />
      </ListItem>
    </List>
  );
};
