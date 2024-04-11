// import ISMS from "@/components/ISMS";
import "../styles/global.css";
import { YoutubeContextProvider } from "@/hooks/urlcontext";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { AppProps } from "next/app";
import { Base } from "@/components/Base";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <YoutubeContextProvider>
        {/* <ISMS pageProps={pageProps} Component={Component} /> */}
        <Base pageProps={pageProps} Component={Component} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </YoutubeContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
