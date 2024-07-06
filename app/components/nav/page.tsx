const Navbar = () => {
    return (
        <nav className="p-8 bg-transparent absolute top-0 z-10 w-full md:block hidden">
            <div className="container mx-auto flex justify-between items-center px-20">
                <div className="text-white text-2xl font-bold capitalize font-[Paladins]">
                    muplay
                </div>
                <div className="space-x-1">
                    {
                        ['home', 'updates', 'resources', 'about', 'contact us'].map((item, index) => (
                            <a key={index}
                            style={{fontWeight: '100', fontSize: '1rem'}}
                            className="text-white hover:font-semibold p-2">{item.toUpperCase()}</a>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
  }

export default Navbar;