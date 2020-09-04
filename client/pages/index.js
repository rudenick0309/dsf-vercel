import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {img} from '../image/images.jpg'


// const iImaage

const Home = () => {
  return (
    <>
      <Head>
        <title>DessertFinder</title>
      </Head>
      <AppLayout>
        <div>Home test</div>
        <div style={{width:'600px', height:'600px'}}><image src={img} style={{width:'100px', height:'100px'}} /></div>
      </AppLayout>

    </>

  );
};

export default Home;
