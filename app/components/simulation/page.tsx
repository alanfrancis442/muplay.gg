"use client";
import Image from "next/image";
import Button from "../button/page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

function Simulate() {

    const container = useRef(null);
    const cardContainerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 50%',
                end: '50% 70%',
                scrub: 2,
                // markers: true,
                pin: true, // Assuming you want the pinning effect for the whole timeline
            }
        });
    
        tl.fromTo('.main-content', {
            opacity: 0,
            y: 100
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
        .fromTo('.controller', {
            y: 100,
            opacity: 0,
            stagger: 0.5
        }, {
            y: 0,
            duration: 1.5,
            opacity: 1,
            stagger: {
                each: 0.5,
                from: 'start',
                ease: 'power1.inOut'
            },
            ease: 'power1.inOut',
        }); // Use relative position to start the second animation at the same time as the first
        
        gsap.to('.char-card',{
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
                start: '10% 80%',
                end: '80% 80%',
                scrub: 2.5,
                // markers: true,
                // pin: true, // Assuming you want the pinning effect for the whole timeline
            }
        }); 

    }, { scope: container });
    
    return ( 
        <div id="updates" ref={container} className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-5 z-10 relative">
                <Image src="/simulate/Console_l.png" className="controller absolute -z-10 left-[-45%]" alt="simulate" height={1000} width={1000} ></Image>
                <Image src="/simulate/Console_r.png" className="controller absolute right-[-45%] -z-10 md:scale-[1.5] sm:scale-[1.2]"
                  alt="simulate" height={800} width={800} ></Image>
                <h1 className="main-content font-paladins sm:text-6xl text-4xl">SIMULATE ‘24</h1>
                <p className="main-content text-lg w-1/2">Gear up for Simulate, our prestigious annual championship that brings together the best talents in the gaming world.</p>
                <div className="main-content">
                    <Button url={'https://mulearn.org/'} label={"Join Now !"} />
                </div>
            </div>
            <div ref={cardContainerRef} className=" w-full mt-8 py-44 px-32 flex flex-col md:flex-row gap-10 justify-between items-center relative z-50">
                {
                    Array(3).fill(0).map((e,i)=>{
                        return(
                            <div key={i} className="relative group char-card opacity-0 translate-y-[100%]">
                                <Image src={`/simulate/card${i+1}.png`} className="card absolute bottom-0 z-10" alt="simulate" height={500} width={500} ></Image>
                                <Image src={`/simulate/char${i+1}.svg`} className="char transition-transform duration-300 transform group-hover:scale-105" alt="simulate" height={300} width={300} ></Image>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default Simulate;