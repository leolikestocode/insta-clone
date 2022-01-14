import useGetSuggestions from "../hooks/useGetSuggestions";
import Story from "./Story";

function Stories() {
  const suggestions = useGetSuggestions();

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions?.items?.map((user) => (
        <Story
          key={user.id.value}
          image={user.picture.thumbnail}
          username={`${user.name.first} ${user.name.last}`}
        />
      ))}
    </div>
  );
}

export default Stories;
