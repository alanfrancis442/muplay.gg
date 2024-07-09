'use client'
import Image from "next/image";
import Navbar from "./components/nav/page";
import Landing from "./components/landing/page";
import Question from "./components/question/question";
import Simulate from "./components/simulation/page";
import Footer from "./components/footer/page";
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {


// const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      {/* <div data-scroll data-scroll-section className="overflow-hidden bg-black text-white absolute top-0"> */}
      <div className="overflow-hidden bg-black text-white absolute top-0">
      <Landing />
        <Question />
        <Simulate />
        <Footer />
      </div>
    </>
  );
}
