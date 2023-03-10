import {
  About,
  Career,
  Contact,
  Footer,
  Header,
  Navbar,
  Project,
  Recommendation,
  Skills,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Career />
      <Recommendation />
      <Contact />
      <Footer />
    </>
  );
}
