import globalContext from "./Createcontext";
import Inititalstate from "./Inititalstate";
import { useReducer } from "react";
import reducer from "./Reducer";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Inititalstate);
  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export default Provider;
