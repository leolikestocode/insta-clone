import Head from "next/head";
import { useContext } from "react";

import { Context } from "../context/ContextProvider";

import Header from "../components/Header";
import Feed from "../components/Feed";
import ModalPost from "../components/ModalPost";
import ModalStory from "../components/ModalStory";
import Conditional from "../components/Conditional";

export default function Home() {
  const { modalStory, modalPost } = useContext(Context);
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram clone</title>
      </Head>

      <Header />
      <Feed />

      <Conditional condition={modalPost}>
        <ModalPost />
      </Conditional>
      <Conditional condition={modalStory}>
        <ModalStory />
      </Conditional>
    </div>
  );
}
