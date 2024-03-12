import type { AppProps } from "next/app";
import useNProgress from "@/hooks/nprogress/useNProgress";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  useNProgress();
  return <Component {...pageProps} />;
}
