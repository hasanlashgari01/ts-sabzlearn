import { useRef, useEffect } from "react";
import Todo from "./Todo";
import { Todo as TodoType } from "./Todos.types";

type TodolistProps = {
    todos: TodoType[];
};

const TodoList: React.FC<TodolistProps> = ({ todos }) => {
    const elem = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (elem.current) elem.current.focus();
    }, []);

    return (
        <ul>
            <input type="text" ref={elem} />
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;
