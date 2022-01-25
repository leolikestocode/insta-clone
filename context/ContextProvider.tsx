import { createContext, useState } from "react";

import useGetSuggestions from "../hooks/useGetSuggestions";
import { IResults, ISuggestions } from "../types/general";
interface IContext {
  modalPost: boolean;
  setModalPost: (_: boolean) => void;
  modalStory: boolean;
  setModalStory: (_: boolean) => void;
  currentStory: IResults;
  setCurrentStory: (_: IResults) => void;
  suggestions: ISuggestions;
}

const defaultCurrentStory = {
  email: "",
  picture: {
    thumbnail: "",
    large: "",
  },
  location: {
    city: "",
    country: "",
  },
  name: {
    first: "",
    last: "",
  },
};

export const Context = createContext<IContext>({
  modalPost: false,
  setModalPost: (_: boolean) => {},
  modalStory: false,
  setModalStory: (_: boolean) => {},
  currentStory: defaultCurrentStory,
  setCurrentStory: (_: IResults) => {},
  suggestions: null,
});

function ContextProvider({ children }) {
  const [modalPost, setModalPost] = useState(false);
  const [modalStory, setModalStory] = useState(false);
  const [currentStory, setCurrentStory] = useState(defaultCurrentStory);
  const suggestions = useGetSuggestions();

  return (
    <Context.Provider
      value={{
        modalPost,
        setModalPost,
        modalStory,
        setModalStory,
        currentStory,
        setCurrentStory,
        suggestions,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
