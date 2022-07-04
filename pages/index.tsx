import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <Head>
        <title>Medium blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Medium front-bage box */}

      <div className="flex items-center py-10 lg:py-0 bg-yellow-400 border-y border-black">
        <div className="px-10 space-y-5">
        <h1 className="text-6xl font-serif max-w-xl"><span className="underline decoration-black decoration-4">Medium</span> is a pace to write, read and connect</h1>
        <h2>It's easy and free to post your thinking on any topic and connect with millions of readers</h2>
        </div>
        <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" />
      </div>
      
      {/* Posts */}
    </div>
  );
};

export default Home;
