import "../styles/globals.css";
import type { AppProps } from "next/app";
import About from "./about";

function MyApp({ Component, pageProps }: AppProps) {
  return <About />;
}

export default MyApp;
