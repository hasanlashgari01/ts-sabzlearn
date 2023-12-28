import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Todo } from "./components/Todos.types";

// 1 JSX.Element
// 2 React.ReactNode
// 3 React.FC
// 3 React.FunctionComponent

const App = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: crypto.randomUUID(), title: "Learn JS", isComplete: true },
        { id: crypto.randomUUID(), title: "Learn TS", isComplete: false },
    ]);
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <>
            <h1>TypeScript</h1>
            <TodoList todos={todos} />
        </>
    );
};

export default App;
