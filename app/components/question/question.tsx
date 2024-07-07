"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useState, useRef } from "react";
import styles from "./style.module.css";

function Question() {
  const card_container = useRef(null);
  const [isactive, setisactive] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  let clipStyle = {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card_container.current,
            start: "50% 50%",
            end: "100% 80%",
            // markers:true,
            scrub: true,
          },
        }
      );
      //   gsap.fromTo('.anitext',{
      //       y:50,
      //     },{
      //       y:0,
      //       ease:'power1.inOut',
      //       duration:1,
      //       stagger:0.1,
      //       scrollTrigger:{
      //         trigger:card_container.current,
      //         start:'top 60%',
      //         end:'50% 60%',
      //         // markers:true,
      //         scrub:true
      //       }
      //     })
    },
    { scope: card_container }
  );

  const data = [
    "“Register and create your account on the μPlay.gg platform.”",
    "Discover the realms of game development, esports, and gaming.",
    "Participate in tournaments, showcase your skills, and connect with gamers",
  ];

  const context = `Muplay is the premier gaming club established by μLearn and Tiltlab,
          is dedicated to uniting and empowering the gaming community. Our
          platform is structured into three dynamic verticals: Game Development,
          Gamers, and Esports. Whether you're an aspiring game developer, a
          passionate gamer, or an esports enthusiast, Muplay is designed to help
          you connect, grow, and thrive in the gaming universe.`;

  //function that takes a string and returns an array of words inside span tags
  const createWordDivs = (text: string) => {
    return text.split(" ").map((word, index) => (
      <div style={clipStyle} className="inline-block px-1 py-1" key={index}>
        <p className="inline anitext leading-none">{word}</p>
      </div>
    ));
  };

  const splitText = (text: string) => {
    return createWordDivs(text);
  };

  interface QuestionCardProps {
    index: number;
    content: string; // Adjust the type according to what `e` actually is
  }

  const QuestionCard: React.FC<QuestionCardProps> = ({ index, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className="relative z-50 overflow-hidden card group"
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
    <div
      ref={card_container}
      className="flex flex-col justify-center items-center min-h-screen gap-56 py-32 sm:py-56 sm:pt-40"
    >
      <div className="flex flex-col items-center justify-center w-[90%] sm:w-[55%] gap-4 text-center">
        <div className={`${styles.cliptext} py-2`}>
          <h1 className={`text-4xl font-[paladins] anitext overflow-hidden}`}>
            What’s MuPlay?
          </h1>
        </div>
        <div className={`text-lg py-4 overflow-hidden ${styles.cliptext}`}>
          <p>{context}</p>
          {/* {splitText(context)} */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-3/4 gap-4 text-center">
        <div
          className={`${styles.cliptext} flex justify-center items-center flex-col`}
        >
          <h1 className="text-4xl font-[paladins]">Excited right?!</h1>
          <p className="text-lg w-1/2">
            Follow these steps to join the club right now
          </p>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row gap-10 w-full grop">
          {data.map((e, i) => (
            <QuestionCard key={i} index={i} content={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
