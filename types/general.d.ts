export interface IPost {
  id: string;
  data: () => {
    username: string;
    profileImg: string;
    image: string;
    caption: string;
  };
}

export interface IResults {
  email: string;
  picture: {
    thumbnail: string;
    large: string;
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

export interface ISuggestions {
  items: IResults[];
  itemsRandom: IResults[];
}
