import { Button, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";

function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk", "take dustbin"]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault(); //will stop the refresh
    setTodos([...todos, input]); //to set new state value along with previous state
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
