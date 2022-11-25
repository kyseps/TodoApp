import { useReducer, useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove": {
      return state.filter((item) => item !== action.payload);
    }
  }
}
dispatch({ type: "add", payload: e.target.value });

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  const [state, dispatch] = useReducer(todoReducer, null, initializer);

  // function handleAddTodo(todo) {
  //   setTodoItems([...todoItems, todo]);
  //   localStorage.setItem("todoItems", JSON.stringify(todo));
  // }

  // function handleIsDone(todo) {
  //   const updatedTodos = todoItems.map((item) => {
  //     if (item.id === todo.id) {
  //       return { ...item, isDone: !item.isDone };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setTodoItems(updatedTodos);
  // }

  // function handleErase(todo) {
  //   const filteredTodoItems = todoItems.filter((item) => {
  //     return item.id !== todo.id;
  //   });
  //   setTodoItems(filteredTodoItems);
  //   console.log(todoItems);
  // }

  return (
    <main className="bg-gray-400 px-8 py-6 rounded-2xl container">
      <Header />

      <TodoForm handleAddTodo={handleAddTodo} />

      <section>
        {todoItems.map((item) => (
          <TodoItem
            item={item}
            handleIsDone={handleIsDone}
            handleErase={handleErase}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
