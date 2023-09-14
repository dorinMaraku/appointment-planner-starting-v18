import React, { useState, useEffect, useRef } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*  Define state variables for contact info and duplicate check */
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const resetValues = useRef('') 
const [contact, setContact] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    const exists = contacts.find(person => person.name === name) 
    if (exists) return;
    setContact({name, phone, email});     
    resetValues.current.value = '';
  };
    
  /* Using hooks, check for contact name in the contacts array variable in props */
   const handleClick = useEffect(() => {
      contacts.map(person => {
        console.log(person)
        if (person.name === name) {
          return
        } 
        console.log(person)
        addContacts(contact)
        console.log(contacts)
      })
    }, [contact]);

  
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          contact={contact} 
          handleSubmit={handleSubmit} 
          handleClick={handleClick} 
          setName={setName} 
          setPhone={setPhone} 
          setEmail={setEmail}
          resetValues={resetValues}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts?.map((contactData, i) => {
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
