function Navbar(){
    return(
        <nav className="navbar grid Poppins grid-cols-[70%,30%] py-8">
                <div className="flex flex-row justify-around text-[4vmin]">
                    <div>About</div>
                    <div>Events</div>
                    <div>Team</div>
                    <div>Editorial Board</div>
                </div>
            <div className="logo flex justify-end px-8 text-[5vmin] ">
                MiMANSA
            </div>
        </nav>
    );
}

export default Navbar;