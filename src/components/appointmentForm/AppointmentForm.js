import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  name,
  setName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  contacts,
}) => {
  const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        min={getTodayString()}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <label htmlFor="contact">Contact:</label>
      <ContactPicker
        id="contact"
        value={""}
        contacts={contacts}
        onChange={(e) => console.log(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};