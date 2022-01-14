import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Key, useEffect, useState } from "react";
import { db } from "../firebase";

import Post from "./Post";
import { IPost } from "../types/general";

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );

  return (
    <div>
      {posts?.map((post: IPost) => {
        const { username, profileImg, image, caption } = post.data();
        return (
          <Post
            key={post.id}
            id={post.id}
            username={username}
            userImg={profileImg}
            img={image}
            caption={caption}
          />
        );
      })}
    </div>
  );
}

export default Posts;
