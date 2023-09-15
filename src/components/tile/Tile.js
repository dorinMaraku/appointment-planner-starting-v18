import React from "react";

export const Tile = ({contact, id}) => {
  return (
    <div className="tile-container">
      <h4> Contact #{id} </h4>
      <p>Name: {contact.name} </p>
      <p>Phone: {contact.phone} </p>
      <p>Email: {contact.email} </p>
    </div>
  );
};
