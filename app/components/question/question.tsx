'use client'
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from './style.module.css';

function Question() {

    const card_container = useRef(null)

    // useEffect(()=>{
    //     gsap.registerPlugin(ScrollTrigger)
    // },[])
    
    // useGSAP(()=>{
    //     gsap.fromTo('.card',{
    //         y:50,
    //         opacity:0
    //     },{
    //         y:0,
    //         duration:1,
    //         opacity:1,
    //         stagger:0.5,
    //         ease:'power3.inOut'
    //     })
    //     gsap.fromTo('.anitext',{
    //         y:50,
    //       },{
    //         y:0,
    //         ease:'power3.inOut',
    //         duration:0.5,
    //         stagger:0.1,
    //         scrollTrigger:{
    //           trigger:card_container.current,
    //           start:'top 50%',
    //           end:'50% 50%',
    //           markers:true,
    //           scrub:true
    //         }
    //       })
          

    // },{scope:card_container})

    return ( 
        <div ref={card_container} className="flex flex-col justify-center items-center min-h-screen gap-56 py-32 sm:py-56">
            <div className="flex flex-col items-center justify-center w-[90%] sm:w-[55%] gap-4 text-center">
                <div className={`${styles.cliptext} py-2`}>
                    <h1 className={`text-4xl font-[paladins] anitext overflow-hidden}`}>What’s MuPlay?</h1>
                </div>
                <p
                className={`text-lg anitext ${styles.cliptext}`}>Muplay is the premier gaming club established by μLearn and Tiltlab, 
                    is dedicated to uniting and empowering the gaming community. 
                    Our platform is structured into three dynamic verticals: Game Development,
                    Gamers, and Esports. Whether you're an aspiring game developer, 
                    a passionate gamer, or an esports enthusiast, Muplay is designed to help you connect,
                    grow, and thrive in the gaming universe.</p>
            </div>
            <div className="flex flex-col items-center justify-center w-3/4 gap-4 text-center">
                <div className={`${styles.cliptext} flex justify-center items-center flex-col`}>
                    <h1 className="text-4xl font-[paladins]">Excited right?!</h1>
                    <p className="text-lg w-1/2">Follow these steps to join the club right now                </p>
                </div>
                <div className="flex justify-between items-center flex-col md:flex-row gap-10 w-full">
                {/* <div className="relative z-0 overflow-hidden">
                    <Image src={`/questions/Frame${1}.png`} className="" alt="frame" height={250} width={250} ></Image>
                    <Image src={`/questions/char${1}.svg`} className="absolute top-16" alt="frame" height={250} width={250} ></Image>
                </div> */}
                    {
                        Array(3).fill(0).map((e,i)=>{
                            return(
                                <div className="relative z-0 overflow-hidden card">
                                    <Image src={`/questions/Frame${i+1}.png`} className="" alt="frame" height={500} width={500} ></Image>
                                    <Image src={`/questions/char${i+1}.svg`} className="absolute top-16" alt="frame" height={500} width={500} ></Image>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
     );
}

export default Question;