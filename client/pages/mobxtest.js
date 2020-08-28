import React from "react";
import {useCallback, useEffect} from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";
import {oneStore} from "../store/store";
import {toJS} from "mobx";


const mobxtest = () => {
  const state = useLocalStore(() => ({
    state: "",
    onChangeState(e) {
      this.state = e.target.value;
    },
  }));

  const onClick = useCallback(() => {
    oneStore.oneFunction(state.state);
  }, [state.state]);

  return useObserver(() => (
    <>
      <Head>
        <title>mobxtest | DessertFinder</title>
      </Head>

      <AppLayout>

        <input value={state.state} onChange={state.onChangeState}/>
        <button onClick={onClick}>
          TRIGGER
        </button>
        {oneStore.data
          ? (<div>{oneStore.data}가 있네요</div>)
          : (<div>data가 없어요</div>)
        }
      </AppLayout>

    </>
  ));
};

export default mobxtest;
