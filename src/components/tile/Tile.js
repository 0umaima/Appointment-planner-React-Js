import React from "react";

export const Tile = ({ name, description }) => {
  const values = Object.values(description);

  return (
    <div>
      <p className="tile-title">{name}</p>
      {values.map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
