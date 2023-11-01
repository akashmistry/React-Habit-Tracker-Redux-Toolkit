import { createSlice } from "@reduxjs/toolkit";
let id = 1;

const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const today = new Date();
      let date = today.getDate();
      let day = today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();

      const daysOfWeek = [
        "",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          {
            id: 0,
            day: daysOfWeek[day],
            dd: date,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 1,
            day: daysOfWeek[day + 1],
            dd: date + 1,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 2,
            day: daysOfWeek[day + 2],
            dd: date + 2,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 3,
            day: daysOfWeek[day + 3],
            dd: date + 3,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 4,
            day: daysOfWeek[1],
            dd: date + 4,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 5,
            day: daysOfWeek[2],
            dd: date + 5,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 6,
            day: daysOfWeek[3],
            dd: date + 6,
            mm: month,
            yyyy: year,
            isDone: "",
          },
        ],
      };
      const tempHabits = [...state, habit];
      return tempHabits;
    },

    deleteHabit: (state, action) => {
      const tempHabits = state.filter((habit) => habit.id !== action.payload);
      return tempHabits;
    },
    habitDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = true;
        }
      }
      return tempHabits;
    },
    habitUnDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = false;
        }
      }
      return tempHabits;
    },
    habitNone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone = "";
        }
      }
      return tempHabits;
    },
  },
});

export const { addHabit, deleteHabit, habitDone, habitUnDone, habitNone } =
  habitSlice.actions;
export default habitSlice.reducer;
