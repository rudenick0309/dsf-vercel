import * as React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

const DessertFinder = ({Component}) => {
  return (
    <>

      <Head>
        <meta charSet={"utf-8"} />
      </Head>

      <Component/>
    </>

  );
};

export default DessertFinder;
