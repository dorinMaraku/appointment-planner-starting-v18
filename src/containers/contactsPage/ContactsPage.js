import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, handleContacts}) => {
  /*  Define state variables for contact info and duplicate check */
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [contact, setContact] = useState({name, phone, email});


  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    if(name) {
      setContact({name, phone, email})     
    }
      console.log(contact)
      
      handleContacts(contact)
      console.log(contacts)
  };

  /* Using hooks, check for contact name in the contacts array variable in props */
   const handleClick = useEffect(() => {
      contacts.map(filteredContact => {
        if (filteredContact.name !== name) {
          return //handleContacts(contact)
        } 
        return
      })
    }, [name]);

   
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm contact={contact} handleSubmit={handleSubmit} handleClick={handleClick} setName={setName} setPhone={setPhone} setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts.map((contactData, i) => {
          return (
            <div key={i}>
            <h4> Contact #{i + 1} </h4>
            <p>Name: {contactData.name} </p>
            <p>Phone: {contactData.phone} </p>
            <p>Email: {contactData.email} </p>
            </div>
          )
        })}
      </section>
    </div>
  );
};
