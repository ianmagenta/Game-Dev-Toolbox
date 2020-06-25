import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const colors = ["#d3ad8b", "#fcce8d", "#f2bb4e", "#84a3a5"];
  let colorLength = colors.length;

  function getRandomColor() {
    if (colorLength <= 0) colorLength = colors.length;
    let item = Math.floor(Math.random() * colorLength--);
    let x = colors[item];
    colors[item] = colors[colorLength];
    colors[colorLength] = x;
    return colors[colorLength];
  }

  return (
    <Context.Provider
      value={{
        getRandomColor,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
