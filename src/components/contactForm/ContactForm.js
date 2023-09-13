import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  handleClick
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
          id='name' 
          type='text' 
          name='name' 
          value={name} 
          placeholder='name' 
          onChange={(e) => setName(e.target.value)}/>
        <label htmlFor='phone'>Phone</label>
        <input id='phone' type='text' name='phone' value={phone} placeholder='phone' onChange={(e) => setPhone(e.target.value)}></input>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' name='email' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
        <button type='submit' onClick={handleClick}> Submit </button>
      </form>
    </>
  );
};

