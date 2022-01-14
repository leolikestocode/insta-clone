export interface IPost {
  id: string;
  data: () => {
    username: string;
    profileImg: string;
    image: string;
    caption: string;
  };
}
