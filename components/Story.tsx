import { useContext } from "react";

import { Context } from "../context/ContextProvider";

function Story({ user }) {
  const { setModalStory, setCurrentStory } = useContext(Context);

  const handleClick = () => {
    setModalStory(true);
    setCurrentStory(user);
  };

  return (
    <div onClick={handleClick}>
      <img
        src={user.picture.thumbnail}
        alt={user.name.first}
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">
        {user.name.first} {user.name.last}
      </p>
    </div>
  );
}

export default Story;
