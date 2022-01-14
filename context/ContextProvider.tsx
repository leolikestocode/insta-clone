import { createContext, useState } from "react";

interface IContext {
  modal: boolean;
  setModal: (_: boolean) => void;
}

export const Context = createContext<IContext>({
  modal: false,
  setModal: (_: boolean) => {},
});

function ContextProvider({ children }) {
  const [modal, setModal] = useState(false);

  return (
    <Context.Provider value={{ modal, setModal }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
