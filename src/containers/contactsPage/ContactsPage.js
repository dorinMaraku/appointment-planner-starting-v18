import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*  Define state variables for contact info and duplicate check */
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    if (!duplicate && name.length > 0) {
      addContacts({ name, phone, email})
      setName('')
      setPhone('')
      setEmail('')
    }
    return
  };
  /* Using hooks, check for contact name in the contacts array variable in props */
  useEffect(() => {
    const exists = contacts?.some(person => {
    return person.name === name
  })
    if (exists) setDuplicate(true)
    else setDuplicate(false)
    console.log(exists)
    console.log(duplicate)
  },[contacts, duplicate, name]);

  
  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit} 
          setName={setName} 
          setPhone={setPhone} 
          setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
