import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../Redux/habitSlice";
import Week from "./Week";

const Habit = ({ habit }) => {
  const dispatch = useDispatch();

  // DELETE HABIT WITH THE GIVEN ID
  const deleteHandler = (id) => {
    dispatch(deleteHabit(id));
  };
  return (
    <div className="collapse collapse-arrow bg-base-200 mb-2">
      <input type="radio" name="my-accordion-2" />

      <div className="collapse-title text-xl font-medium">{habit.name}</div>

      <div className="collapse-content">
        <div className="flex flex-row justify-between">
          {habit.weekLog.map((week) => {
            return <Week week={week} key={week.id} />;
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="mb-1 mt-3 btn btn-error w-1/4"
            onClick={() => deleteHandler(habit.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Habit;
