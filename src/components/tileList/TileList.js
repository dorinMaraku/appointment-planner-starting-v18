import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles?.map(({name, ...description }, i) => {
          return (
        <Tile key={i} name={name} description={description}/>
          )
        })}
    </div>
  );
};
