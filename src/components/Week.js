import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { habitDone, habitUnDone, habitNone } from "../Redux/habitSlice";
const Week = ({ week }) => {
  const today = new Date();
  const todayDay = today.getDay();
  const dispatch = useDispatch();

  // MARK DONE HANDLER
  const markToDone = (id) => {
    if (id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }
    // DISPATCING TRUE TO isDone
    dispatch(habitDone(id));
  };

  // MARK UNDONE HANDLER
  const markToUnDone = (id) => {
    if (id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }
    //DISPATCHING FALSE TO isDone
    dispatch(habitUnDone(id));
  };

  // MARK NONE HANDLER
  const markToNone = (id) => {
    if (id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }
    // DISPATCHING NONE TO isDone
    dispatch(habitNone(id));
  };

  return (
    <div>
      <div>
        <p>{week.day}</p>
        <p>
          {week.dd}/{week.mm}/{week.yyyy}
        </p>
        <p>{week.isDone}</p>
        <div className="flex flex-col">
          <div>
            <i onClick={() => markToDone(week.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={
                  week.isDone === true
                    ? "w-6 h-6 fill-green-600"
                    : "w-6 h-6 stroke-green-600"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </i>
            <i onClick={() => markToUnDone(week.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={
                  week.isDone === false
                    ? "w-6 h-6 fill-red-600"
                    : "w-6 h-6 stroke-red-600"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </i>
            <i onClick={() => markToNone(week.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={
                  week.isDone === ""
                    ? "w-6 h-6 fill-amber-600"
                    : "w-6 h-6 stroke-amber-600"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                />
              </svg>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Week;
