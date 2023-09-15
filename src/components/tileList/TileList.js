import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts?.map((contact, i) => {
          return (
        <Tile key={i} id={i+1} contact={contact}/>
          )
        })}
    </div>
  );
};
