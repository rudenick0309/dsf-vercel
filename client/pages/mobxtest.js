import React from "react";
import {useCallback} from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";
import {oneTestStore} from "../store/store";
import {toJS} from "mobx";


const mobxtest = () => {
  const data = toJS(oneTestStore).data;
  const oneFuntion = toJS(oneTestStore).oneTestFunction;
  console.log("In mobxTest, oneTestStore : ", data);

  const state = useLocalStore(() => ({
    componentState: "",
    onChangeState(e) {
      this.componentState = e.target.value;
    },
  }));
  // console.log('In Mobxtest, out, state.componentState : ', state.componentState)
  const onClick = useCallback(() => {
    console.log('In Mobxtest, onCLick, state.componentState : ', state.componentState)
    oneFuntion(state.componentState);
  }, [state.componentState]);

  return useObserver(() => (
    <div>
      <Head>
        <title>mobxtest | DessertFinder</title>
      </Head>

      <AppLayout>
        <div>why dose not working in the web????</div>
        <input value={state.componentState} onChange={state.onChangeState}/>
        <button onClick={onClick}>
          TRIGGER
        </button>
      </AppLayout>

    </div>

  ));
};

export default mobxtest;
