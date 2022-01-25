import { useContext } from "react";

import { Context } from "../context/ContextProvider";
import Story from "./Story";

function Stories() {
  const { suggestions } = useContext(Context);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions?.items?.map((user) => (
        <Story key={user.email} user={user} />
      ))}
    </div>
  );
}

export default Stories;
