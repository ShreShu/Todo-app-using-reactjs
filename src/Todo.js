import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Todo.css";
import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore/lite";
import { Button } from "@mui/material";

export const Todo = ({ todo }) => {
  return (
    <List className="todo_list">
      <ListItem alignItems="flex-start">
        <ListItemText primary="TODO" secondary={todo.todo} />
        <Button onClick={(e) => deleteDoc(doc(db, "todos", todo.id))}>
          Delete me
        </Button>
      </ListItem>
    </List>
  );
};
