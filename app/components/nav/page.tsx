'use client';
import { useEffect,useRef,useState } from "react";
const Navbar = () => {

    const navRef = useRef<HTMLDivElement|null>(null!);
    const [show, setshow] = useState<boolean>(true)
    const [scrollValue, setscrollValue] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            // Current scroll position
            const currentScrollPos = window.pageYOffset;
            if (scrollValue > currentScrollPos) {
                setshow(true); 
            } else {
                setshow(false); 
            }
            setscrollValue(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollValue]); 

    return (
        <nav ref={navRef}
        style={{
            transform: show ? 'translateY(0)' : 'translateY(-100%)',
        }}
        className="p-4 bg-transparent w-full md:block hidden fixed top-0 z-[99999] backdrop-blur-md transition-all duration-500">
            <div className="container mx-auto flex justify-between items-center px-[2vw]">
                <div className="text-white text-[3vw] font-bold  font-paladins">
                    MUPLAY<span style={{
                        fontFamily: "arial",
                    }}>.gg</span>
                </div>
                <div className="">
                    {
                        ['home', 'updates', 'resources', 'about', 'contact us'].map((item, index) => (
                            <a key={index}
                            style={{fontSize: '1.1vw'}}
                            className="text-white p-2 hover:underline underline-offset-2 transition-all">{item.toUpperCase()}</a>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
  }

export default Navbar;