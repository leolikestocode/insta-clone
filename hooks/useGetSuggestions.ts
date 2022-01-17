import { useState, useEffect } from "react";

interface IResults {
  email: string;
  picture: {
    thumbnail: string;
  };
  location: {
    city: string;
    country: string;
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

let cachedData = null;

const useGetSuggestions = (): ISuggestions => {
  const [suggestions, setSuggestions] = useState<ISuggestions>(null);

  function setData(data: IResults[]) {
    setSuggestions({
      items: data,
      itemsRandom: data.sort((a: IResults, b: IResults) =>
        a.name.last > b.name.last ? 1 : -1
      ),
    });
  }

  useEffect(() => {
    async function getData() {
      if (cachedData) {
        setData(cachedData);
        return;
      }

      const data = await fetch(`https://randomuser.me/api?results=15`).then(
        (data) => data.json()
      );

      setData(data.results);
      cachedData = data.results;
    }

    getData();
  }, []);

  return suggestions;
};

export default useGetSuggestions;
