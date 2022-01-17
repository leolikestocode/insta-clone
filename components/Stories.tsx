import { useSession } from "next-auth/react";
import useGetSuggestions from "../hooks/useGetSuggestions";
import Story from "./Story";

function Stories() {
  const suggestions = useGetSuggestions();
  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story image={session?.user.image} username={session?.user.username} />
      )}

      {suggestions?.items?.map((user) => (
        <Story
          key={user.email}
          image={user.picture.thumbnail}
          username={`${user.name.first} ${user.name.last}`}
        />
      ))}
    </div>
  );
}

export default Stories;
