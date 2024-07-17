"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
// import { delay, motion, useAnimation, useInView } from "framer-motion";
import styles from "./style.module.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Question() {
  const cardContainerRef = useRef(null);
  // const controls = useAnimation();
  // const isInView = useInView(cardContainerRef);

  const container = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.current,
            start: 'top 50%',
            end: '50% 50%',
            scrub: 1,
            // markers: true,
            // pin: true, // Assuming you want the pinning effect for the whole timeline
        }
    });

    tl.fromTo('.ani-content', {
        opacity: 0,
        // y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power1.inOut',
        stagger:{
            amount: 0.5,
            from: 'start',
            ease: 'power1.inOut'
        }
    })

    gsap.to('.char-card',
      {
        y: 0,
        duration: 2.5,
        opacity: 1,
        ease: 'power1.inOut',
        stagger: {
            each: 0.5,
            from: 'start',
            ease: 'power3.inOut'
      },
      scrollTrigger:{
        trigger: cardContainerRef.current,
        start: 'top 80%',
        end: '80% 80%',
        scrub: 2.5,
        // markers: true,
        // pin: true, // Assuming you want the pinning effect for the whole timeline
      }
    }); // Use relative position to start the second animation at the same time as the first

}, { scope: container });


  // useEffect(() => {
  //   if (isInView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [isInView, controls]);

  // const animationVariants = {
  //   hidden: { y: 50, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 1, delay:0.1, staggerChildren: 0.5, ease: "easeInOut" } },
  // };

  const data = [
    "“Register and create your account on the μPlay.gg platform.”",
    "Discover the realms of game development, esports, and gaming.",
    "Participate in tournaments, showcase your skills, and connect with gamers",
  ];

  const createWordDivs = (text) => {
    return text.split(" ").map((word, index) => (
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} className="inline-block px-1 py-1" key={index}>
        <p className="inline anitext leading-none">{word}</p>
      </div>
    ));
  };

  const QuestionCard = ({ index, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className="relative z-50 overflow-hidden card group"
        // initial="hidden"
        // animate={controls}
        // variants={animationVariants}
        // transition={{delay: 0.5*index}}
      >
        <Image
          src={`/questions/Frame${index + 1}.png`}
          alt="frame"
          height={500}
          width={500}
        />
        <Image
          src={`/questions/char${index + 1}.svg`}
          className="absolute top-16 transition-transform duration-300 transform group-hover:scale-110"
          alt="char"
          height={500}
          width={500}
        />
        <div
          className={`absolute tracking-tighter leading-none bottom-2 p-2 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm left-1/2 -translate-x-[50%] min-w-[80%] min-h-[25%] z-[60]
              ${isActive ? "visible" : "hidden"} transition-all`}
        >
          {content}
        </div>
      </div>
    );
  };

  return (
    <div id="about" ref={container}
      className="flex flex-col justify-center items-center min-h-screen gap-56 py-32 sm:py-56 sm:pt-40 bg-black"
    >
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-[55%] gap-4 text-center">
        <div className={`${styles.cliptext} py-2`}>
          <h1 className={`ani-content text-4xl font-paladins anitext overflow-hidden}`}>
            What’s MuPlay?
          </h1>
        </div>
        <div className={`ani-content text-lg py-4 overflow-hidden ${styles.cliptext}`}>
          <p>
          μPlay.gg is a premier gaming club established by <b>μLearn</b> and <b>TILTLABS</b>, dedicated to uniting and empowering the gaming community. Our platform is structured into three dynamic verticals: Game Development, Gamers, and Esports, where you can connect, grow, and thrive in the gaming universe.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 gap-4 text-center">
        <div
          className={`${styles.cliptext} flex justify-center items-center flex-col`}
        >
          <h1 className="ani-content text-4xl font-paladins">Excited right?!</h1>
          <p className="ani-content text-lg w-1/2">
            Follow these steps to join the club right now
          </p>
        </div>
        <div
      ref={cardContainerRef}
        className="flex justify-between items-center flex-col md:flex-row gap-10 w-full grop relative z-50">
          {data.map((e, i) => (
            <div key={i} className="char-card translate-y-[100%] opacity-0">
              <QuestionCard  index={i} content={e} ></QuestionCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
