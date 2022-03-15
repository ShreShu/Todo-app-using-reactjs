import { Button, FormControl, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import "./App.css";
import { Todo } from "./Todo";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  orderBy,
  query,
} from "firebase/firestore/lite";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(async () => {
    {
      /*BUG: Onsnapshot is not working, throwing some error  */
    }
    const todoCol = collection(db, "todos");
    const qry = query(todoCol, orderBy("timestamp", "desc"));
    const todoSnapshot = await getDocs(qry);
    console.log("I am snapshot", todoSnapshot);
    setTodos(
      todoSnapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
    );
  }, []);

  const addTodo = (event) => {
    const todoCol = collection(db, "todos");
    addDoc(todoCol, {
      todo: input,
      timestamp: Timestamp.now(),
    });
    setInput(""); //set the input again to blank after submission
  };
  return (
    <div className="App">
      <FormControl>
        <TextField
          value={input}
          onChange={(e) => {
            setInput(e.target.value); //to change value of input state after every key stroke
          }}
          id="standard-basic"
          label="Item"
          variant="standard"
        />
        <Button
          disabled={!input}
          variant="contained"
          color="success"
          type="submit"
          onClick={addTodo}
        >
          Add toDo
        </Button>
      </FormControl>
      <ul>
        {todos.map((todo) => (
          <Todo key={Math.random()} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
