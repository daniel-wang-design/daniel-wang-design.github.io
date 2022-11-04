import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel | UWaterloo CS</title>
        <meta name="description" content="Welcome to my website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-[#eff9ff]">
        <Main />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
