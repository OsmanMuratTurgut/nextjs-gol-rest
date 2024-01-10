import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home/home";
import Footer from "../components/layout/Footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Golhisar Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
