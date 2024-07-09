const Navbar = () => {
    return (
        <nav className="px-5 py-6 bg-transparent w-full md:block hidden sticky top-0 z-[99999] backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center px-[2vw]">
                <div className="text-white text-[3vw] font-bold  font-[Paladins]">
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