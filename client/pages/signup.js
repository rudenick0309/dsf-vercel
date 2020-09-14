import * as React from "react";
import { useEffect } from 'react'
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {useForm} from 'react-hook-form'


const signup = () => {
  const {register, setValue, handleSubmit, errors} = useForm();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const onSubmit = handleSubmit(() => {
    console.log('In signup, onSubmit, data : ', data)
    // if (data.password !== data.passwordCheck) {
    //   return alert('diff')
    // }
  }); // firstName and lastName will have correct type

  const validatePassword = (value) => {
  }

  const validatePasswordCheck = (value) => {
  }

  return (
    <>
      <Head>
        <title>signup | DessertFinder</title>
      </Head>

      <AppLayout>
        <form onSubmit={onSubmit}>
          <label>Your email</label>
          <input name="email" type={'email'} ref={register()} />
          {errors.email && errors.email.type === 'required' && <p>'You must fill this form'</p>}
          {errors.email && errors.email.type === 'minLength' && <p>'You must fill this form longer than 8 len'</p>}
          <label>password</label>
          <input name="password" type={'password'} ref={register({required: true, minLength:4,validate: validatePassword} )}/>

          <label>password-check</label>
          <input name="passwordCheck" type={'password'} ref={register( {required: true, minLength:4, validate: validatePasswordCheck,} )}/>

          {/*{password && passwordCheck}*/}

          <input type={'submit'} />

        </form>
      </AppLayout>

    </>
  );
}

export default signup;

