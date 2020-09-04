import * as React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import img from '../image/images.jpg'

const Home = () => {
  const i = img
  return (
    <>
      <Head>
        <title>DessertFinder</title>
      </Head>
      <AppLayout>
        <div>Home 테스트</div>
        <image src={i}/>
      </AppLayout>

    </>

  );
};

export default Home;
