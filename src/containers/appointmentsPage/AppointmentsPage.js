import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointments}) => {
  /* Define state variables for appointment info */
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data */
    addAppointments({name, contact, date, time})
    setName('');
    setContact('');
    setDate('');
    setTime('');
  };
  console.log(appointments)
  console.log(contacts)
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          handleSubmit={handleSubmit}
          contact={contact}
          setContact={setContact}
          name={name}
          setTitle={setName}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};