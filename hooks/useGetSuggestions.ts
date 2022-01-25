import { useState, useEffect } from "react";

import { ISuggestions, IResults } from "../types/general";

let cachedData = null;

const useGetSuggestions = (): ISuggestions => {
  const [suggestions, setSuggestions] = useState<ISuggestions>(null);

  useEffect(() => {
    async function getData() {
      const data = await fetch(`https://randomuser.me/api?results=15`).then(
        (data) => data.json()
      );

      const dataCloned = [...data.results];
      setSuggestions({
        items: data.results,
        itemsRandom: dataCloned.sort((a: IResults, b: IResults) =>
          a.email > b.email ? 1 : -1
        ),
      });
    }

    getData();
  }, []);

  return suggestions;
};

export default useGetSuggestions;
