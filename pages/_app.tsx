import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

import ContextProvider from "../context/ContextProvider";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>
  );
}
