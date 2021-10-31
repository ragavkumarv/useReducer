import "./styles.css";

import { useReducer } from "react";

// Single source of truth - It contains all data

const initialState = { count: 1 };
const reducer = (state, action) => {
  // switch, state - current value
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    case "reset": {
      return { count: action.payload };
    }
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState); // subscribing
  return (
    <div className="App">
      {/* updated store value */}
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {/* use the same useReducer to compelete task */}
      <input />
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
}

// { type: "increment" } - action
