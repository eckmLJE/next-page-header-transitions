import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
    <div>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </div>
);

export default Home;
