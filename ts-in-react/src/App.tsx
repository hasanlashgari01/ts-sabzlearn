import { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todos.types";
import ThemeContextProvider from "./context/ThemeContext";
import Header from "./components/Header";

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
            <ThemeContextProvider>
                <Header />
            </ThemeContextProvider>
        </>
    );
};

export default App;
