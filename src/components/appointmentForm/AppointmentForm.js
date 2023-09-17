import React, { useMemo } from "react";
import {ContactPicker} from "../contactPicker/ContactPicker.js";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  // console.log(contacts)
  const contactNames = useMemo(() => {
    return contacts?.map(contact => contact.name)
  }, [contacts])

  return (
    <>
    <form onSubmit={handleSubmit} style={{maxWidth: "400px"}}>
      <label>
        <input 
          type="text" 
          name="name"
          value={name} 
          placeholder="Appointment Name"
          onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label>
        <ContactPicker 
          name='contact'
          value={contact}
          contacts={contactNames} 
          onChange={(e) => setContact(e.target.value)} />
      </label>
      <label>
        <input 
          type="date" 
          name="date"
          min={getTodayString()} 
          value={date} 
          onChange={(e) => setDate(e.target.value)}/>
      </label>
      <label>
        <input 
          type="time" 
          name="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}/>
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};
