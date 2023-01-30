import Head from "next/head";
import { SessionProvider, SessionProviderProps  } from 'next-auth/react';
import { NextPage } from "next";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";

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
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
            fontFamily: 'Inter, sans-serif',
          }}
        >
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </MantineProvider>
        </SessionProvider>
        </>    
}