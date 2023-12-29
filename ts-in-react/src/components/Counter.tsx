import { useReducer } from "react";

type CounterType = {
    count: number;
};

type UpdateActions = {
    type: "Increment" | "Decrement";
    payload: number;
};

type ResetAction = {
    type: "Reset";
};

type ActionTypes = UpdateActions | ResetAction;

const initialState = {
    count: 0,
};

const reducer = (state: CounterType, action: ActionTypes) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + action.payload };
        case "Decrement":
            return { count: state.count - action.payload };
        case "Reset":
            return initialState;
        default:
            throw new Error("Invalid Action Type!!");
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>{state.count}</h1>
            <div>
                <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>Increase</button>
                <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
                <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>Decrease</button>
            </div>
        </>
    );
};

export default Counter;
