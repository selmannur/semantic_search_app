import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { inter, manrope } from "./fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${manrope.className} ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
