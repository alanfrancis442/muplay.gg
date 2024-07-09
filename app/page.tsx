"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/nav/page";
import Landing from "./components/landing/page";
import Question from "./components/question/question";
import Simulate from "./components/simulation/page";
import Footer from "./components/footer/page";

export default function Home() {
  const scrollRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Component has mounted, we are now client-side
    if (scrollRef.current && isClient) {
      import('locomotive-scroll').then(LocomotiveScrollModule => {
        const LocomotiveScroll = LocomotiveScrollModule.default;
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true
        });

        return () => {
          locomotiveScroll.destroy();
        };
      });
    }
  }, [isClient]); // Depend on isClient to re-run effect when it changes

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
