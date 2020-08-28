import * as React from "react";
import {useCallback, useEffect} from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";

import { action } from 'mobx';
import {oneStore, twoStore} from "../store/store";

interface LocalState {
  state: string,
  onChangeState : (e:React.ChangeEvent<HTMLInputElement>) => void,
}

const mobxtest = () => {
  console.log('In comp, mobxtest, twoStore.data : ', Array.isArray(twoStore.data));
  console.log('In comp, mobxtest, twoStore.data : ', twoStore.data);
  twoStore.data.forEach(el => console.log('여기',el))


  const state = useLocalStore<LocalState>(() => ({
    state: "",
    onChangeState: action(function(this : LocalState, e: React.ChangeEvent<HTMLInputElement>)  {
      this.state = e.target.value;
    }),
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
          ?
          (
            <>
              <div>{oneStore.data}가 있네요</div>
              <div>{twoStore.data.length}가 있네요</div>

            </>
          )
          : (<div>data가 없어요</div>)
        }
      </AppLayout>

    </>
  ));
};

export default mobxtest;
