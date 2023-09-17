import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile"> {name} </p>
      {Object.values(description).map((value, i) => {
        return (
          <p key={i} className="tile">{value}</p>
        )}
      )}
    </div>
  );
};
