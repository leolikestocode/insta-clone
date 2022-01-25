import { useContext } from "react";

import { Context } from "../context/ContextProvider";

function Suggestions() {
  const { suggestions } = useContext(Context);

  console.log("suggestions", suggestions);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions?.itemsRandom.slice(0, 5).map((user) => (
        <div
          key={user.email}
          className="flex items-center justify-between mt-3"
        >
          <img src={user.picture.thumbnail} alt={user.name.first} />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">
              {user.name.first} {user.name.last}
            </h2>
            <h3 className="text-sm text-gray-400 truncate">
              From {user.location.city} - {user.location.country}
            </h3>
          </div>
          <button className="text-blue-400 text-sm font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
