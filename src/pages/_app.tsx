import Head from "next/head";
import { SessionProvider, SessionProviderProps  } from 'next-auth/react';
import { NextPage } from "next";
import { AppProps } from "next/app";

type AppPropsExtended = AppProps & SessionProviderProps & {
  Component : NextPage
}

export default function App(props : AppPropsExtended) {


  const { Component, pageProps } = props;


    return <>
        <Head>
            <meta name="viewport" 
          content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <SessionProvider session={props.session}>
        <Component {...pageProps} />
        </SessionProvider>
        </>    
}