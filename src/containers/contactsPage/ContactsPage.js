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
    setContact({name, phone, email})
    console.log(contact)

  };

  /* Using hooks, check for contact name in the contacts array variable in props */
   const handleClick = useEffect(() => {
      contacts.map(filteredContact => {
        if (filteredContact.name === contact.name) {
          return
        } 
        handleContacts( contact)
        setName('')
        setPhone('')
        setEmail('')
      })
    }, [contact]);

   
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm contact={contact} handleSubmit={handleSubmit} handleClick={handleClick} setName={setName} setPhone={setPhone} setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts.map(contactData => {
          return (
            <>
            <h3> Contact #{contacts.length} </h3>
            <h3>Name: {contactData.name} </h3>
            <h4>Phone: {contactData.phone} </h4>
            <h4>Email: {contactData.email} </h4>
            </>
          )
        })}
      </section>
    </div>
  );
};
