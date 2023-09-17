import React from "react";

export const ContactPicker = ({contacts, onChange, name, value}) => {
  return (
    <>
    <select onChange={onChange} value={value} name={name}>
      <option value='' key={-1}>No contact Selected</option>
      {contacts?.map(contact => {
        return <option key={contact} value={contact}>{contact}</option>;
      })}
    </select>
    </>
  );
};
