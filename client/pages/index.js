import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

import Map from "../components/Map";


// const iImaage

const Home = () => {
  return (
    <>
      <Head>
        <title>DessertFinder</title>
      </Head>
      <AppLayout>
        <Map/>
      </AppLayout>

    </>

  );
};

export default Home;
