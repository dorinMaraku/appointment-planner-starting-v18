import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} style={{maxWidth: "400px"}}>
        <label htmlFor='name'>Name</label>
        <input 
          id='name' 
          type='text' 
          name='name' 
          value={name} 
          placeholder='name' 
          onChange={(e) => setName(e.target.value)}/>
        <label htmlFor='phone'>Phone</label>
        <input 
          id='phone' 
          type='tel' 
          name='phone' 
          value={phone} 
          placeholder='phone' 
          onChange={(e) => setPhone(e.target.value)}/>
        <label htmlFor='email'>Email</label>
        <input 
          id='email' 
          type='text' 
          name='email' 
          value={email} 
          placeholder='email' 
          onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit'> Submit </button>
      </form>
    </>
  );
};

