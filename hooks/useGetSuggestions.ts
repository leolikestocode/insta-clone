import { useState, useEffect } from "react";

interface IResults {
  id: {
    value: number;
  };
  picture: {
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
}

interface ISuggestions {
  items: IResults[];
  itemsRandom: IResults[];
}

const useGetSuggestions = (): ISuggestions => {
  const [suggestions, setSuggestions] = useState<ISuggestions>(null);
  useEffect(() => {
    async function getData() {
      const data = await fetch("https://randomuser.me/api?results=20").then(
        (data) => data.json()
      );

      setSuggestions({
        items: data.results,
        itemsRandom: data.results.sort((a: IResults, b: IResults) =>
          a.name.last > b.name.last ? 1 : -1
        ),
      });
    }
    getData();
  }, []);

  console.log(`suggestions`, suggestions);
  return suggestions;
};

export default useGetSuggestions;
