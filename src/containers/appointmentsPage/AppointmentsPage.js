import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addAppointment({ name, contact, date, time });

    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <h2>Add Appointment</h2>
      <AppointmentForm
        name={name}
        setName={setName}
        contact={contact}
        setContact={setContact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        contacts={contacts}
      />

      <h2>Appointments</h2>
      <TileList data={appointments} />
    </div>
  );
};