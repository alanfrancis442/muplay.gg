"use client";
import { useEffect, useRef } from "react";
import Navbar from "./components/nav/page";
import Landing from "./components/landing/page";
import Question from "./components/question/question";
import Simulate from "./components/simulation/page";
import Footer from "./components/footer/page";
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true
      });

      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <div ref={scrollRef} className="overflow-hidden bg-black text-white absolute top-0">
        <Landing />
        <Question />
        <Simulate />
        <Footer />
      </div>
    </>
  );
}
