import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../JS/actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counterReducer.count);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
