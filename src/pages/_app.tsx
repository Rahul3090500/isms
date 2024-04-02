import ISMS from "@/components/ISMS";
import "../styles/global.css";
import { YoutubeContextProvider } from "@/hooks/urlcontext";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <YoutubeContextProvider>
        <ISMS pageProps={pageProps} Component={Component} />
      </YoutubeContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
