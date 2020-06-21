import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [window, setWindow] = useState();

  return (
    <Context.Provider
      value={{
        window,
        setWindow,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
