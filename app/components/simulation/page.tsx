'use client'
import Image from "next/image";
import Button from "../button/page";

function Simulate() {
    
    return ( 
        <div className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-col justify-center items-center gap-5 z-10 relative">
                <Image src="/simulate/Console_l.png" className="absolute -z-10 left-[-45%]" alt="simulate" height={1000} width={1000} ></Image>
                <Image src="/simulate/Console_r.png" className="absolute right-[-45%] -z-10 md:scale-[1.5] sm:scale-[1.2]"
                  alt="simulate" height={800} width={800} ></Image>
                <h1 className="font-[paladins] sm:text-6xl text-4xl">SIMULATE ‘24</h1>
                <p className="text-lg w-1/2">Gear up for Simulate, our prestigious annual championship that brings together the best talents in the gaming world.</p>
                <Button label="Register Now" />
            </div>
            <div className=" w-full my-64 pt-48 z-0 px-32 flex flex-col md:flex-row gap-10 justify-between items-center">
                {
                    Array(3).fill(0).map((e,i)=>{
                        return(
                            <div className="relative">
                                <Image src={`/simulate/card${i+1}.png`} className="absolute bottom-0 z-10" alt="simulate" height={300} width={300} ></Image>
                                <Image src={`/simulate/char${i+1}.svg`}  alt="simulate" height={300} width={300} ></Image>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default Simulate;