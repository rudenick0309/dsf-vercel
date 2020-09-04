import * as React from "react";
import {useCallback, useEffect} from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";

import {action} from 'mobx';
import {oneStore, twoStore} from "../store/store";


const mobxtest = () => {
    const state = useLocalStore(() => ({
        state: "",
        onChangeState: action(function () {
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
