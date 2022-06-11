//setup data layer
//when we push things into it, we can use it in any of our components
//We need this to track the logged User
//This is also known as Context Provider.
//It will wrap the app in the index.js, giving everything inside access to the data

//* The provider is used to give other components access to the context

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer, { initialState } from "./reducer";

//This is the Data Layer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({ children }) => {
  //any component that is wrapped with StateContext.Provider will have access to the value
  return (
    // <StateContext.Provider value={useReducer(reducer, initialState)}>
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
