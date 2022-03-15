import { Button, FormControl, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import "./App.css";
import { Todo } from "./Todo";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(async () => {
    {
      /*BUG: not taking real time data,need to display
   this process on taking snapshot ie when any new todo is added it should show itself  */
    }

    const todoCol = collection(db, "todos");
    const todoSnapshot = await getDocs(todoCol);
    console.log("I am snapshot", todoSnapshot);
    setTodos(todoSnapshot.docs.map((doc) => doc.data().todo));
  }, []);

  const addTodo = (event) => {
    const todoCol = collection(db, "todos");
    event.preventDefault(); //will stop the refresh
    addDoc(todoCol, {
      todo: input,
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
