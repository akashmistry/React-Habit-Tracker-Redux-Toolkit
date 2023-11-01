import React from "react";
import { useDispatch } from "react-redux";
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
            <input
              type="radio"
              name="radio-2"
              className="radio radio-success"
              onClick={() => markToDone(week.id)}
            />{" "}
            <small className="mb-1">Done</small>
          </div>
          <div>
            <input
              type="radio"
              name="radio-2"
              className="radio radio-error"
              onClick={() => markToUnDone(week.id)}
            />{" "}
            <small className="mb-1">Not Done</small>
          </div>
          <div>
            <input
              type="radio"
              name="radio-2"
              className="radio radio-info"
              onClick={() => markToNone(week.id)}
            />{" "}
            <small className="mb-1">Leave</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Week;
