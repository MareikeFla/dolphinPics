import { Html, NextScript } from "next/document";
import { Head } from "next/document";
import Main from ".";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="bg-slate-900 lg:mx-10 max-h-screen ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
