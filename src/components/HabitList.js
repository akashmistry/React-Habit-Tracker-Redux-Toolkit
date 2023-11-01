import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit } from "../Redux/habitSlice";
import Habit from "./Habit";

const HabitList = () => {
  const dispatch = useDispatch();

  // FETCH ALL THE HABITS IF THERE
  let habits = useSelector((state) => state.habits);

  const [habit, setHabit] = useState("");

  // HANDLING THE INPUT
  const inputHandler = (e) => {
    setHabit(e.target.value);
  };

  // ON CLICKIN ON ADD BUTTON DISPATCH THE DATA TO REDUX STORE
  const submitHandler = () => {
    dispatch(addHabit(habit));
    setHabit("");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-1/2 p-3 border rounded-2xl border-green-400">
        <div className=" flex flex-col items-center mb-5">
          <input
            type="text"
            placeholder="Enter Your Habit Here"
            className="input w-full max-w-xs border-green-200 mb-2"
            value={habit}
            onChange={inputHandler}
          />
          <button
            className="btn btn-success btn-sm mb-2 w-1/6"
            onClick={submitHandler}
          >
            Add +
          </button>
        </div>
        {/* MAPING ALL THE HABITS */}
        {habits.map((habit) => {
          return <Habit habit={habit} key={habit.id} />;
        })}
      </div>
    </div>
  );
};

export default HabitList;
