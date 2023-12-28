import { Todo as TodoType } from "./Todos.types";

const Todo: React.FC<React.PropsWithChildren<TodoType>> = ({ title, isComplete }) => {
    const clickHandler = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        console.log(event.target);
    };

    return (
        <li onClick={clickHandler}>
            <span>{title}</span>
            <span>{isComplete ? "✅" : "❌"}</span>
        </li>
    );
};

export default Todo;
