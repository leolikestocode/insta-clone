import Header from "../components/Header";
import Feed from "../components/Feed";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram clone</title>
      </Head>

      <Header />
      <Feed />

      {/* Modal */}
    </div>
  );
}
