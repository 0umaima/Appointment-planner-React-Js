import React from "react";
import { Tile } from "./Tile";


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
