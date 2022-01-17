import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Moment from "react-moment";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user.uid) !== -1
      ),
    [likes, session?.user.uid]
  );

  const sendComment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const sendLike = async () => {
    const docRef = doc(db, "posts", id, "likes", session.user.uid);
    if (hasLiked) {
      await deleteDoc(docRef);
      return;
    }

    await setDoc(docRef, {
      username: session.user.username,
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt={username}
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img src={img} alt={caption} className="object-cover w-full" />
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                className="btn text-red-500"
                onClick={sendLike}
              />
            ) : (
              <HeartIcon className="btn" onClick={sendLike} />
            )}
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {likes.length > 0 && (
        <p className="p-5 pb-0 font-bold mr-1">
          {likes.length} like{likes.length === 1 ? "" : "s"}
        </p>
      )}

      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((c) => {
            const { userImg, username, comment, timestamp } = c.data();
            return (
              <div key={c.id} className="flex items-center space-x-2 mb-3">
                <img
                  src={userImg}
                  alt={username}
                  className="h-7 rounded-full"
                />
                <p className="text-sm flex-1">
                  <span className="font-bold">{username} </span>
                  {comment}
                </p>

                <Moment fromNow interval={30000} className="pr-5 text-xs">
                  {timestamp?.toDate()}
                </Moment>
              </div>
            );
          })}
        </div>
      )}

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="btn" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            onClick={sendComment}
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
