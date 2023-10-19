import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = ({ data }) => {
  return (
    <div>
       {data.map((object, index) => {
        const { name, ...rest } = object;
        return <Tile key={index} name={name} {...rest} />;
      })}
    </div>
  );
};
