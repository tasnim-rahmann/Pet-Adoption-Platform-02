import { MdPets } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="flex justify-between px-8 py-4 items-center">
                {/* Logo + Desktop Links */}
                <div className="flex items-center gap-10">
                    <div className="bg-[#1C4A2A] h-10 w-10 flex justify-center items-center rounded-full">
                        <MdPets className="text-white h-5 w-5" />
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-10">
                        <Link to="/"><li className="cursor-pointer">Home</li></Link>
                        <Link to="/pets"><li className="cursor-pointer">Pets</li></Link>
                        <Link to="/faq"><li className="cursor-pointer">FaQ</li></Link>
                    </ul>
                </div>

                {/* Desktop Buttons / User Menu */}
                <div className="hidden md:flex items-center gap-5">
                    <button className="border-[#E0E8E0] border px-5 py-2 rounded-sm hover:bg-[#1C4A2A] hover:text-white transition-all cursor-pointer">
                        Login
                    </button>
                    <button className="bg-[#1C4A2A] text-white px-5 py-2 rounded-sm transition-all cursor-pointer">
                        Register
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-md border border-gray-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col gap-3 p-5">
                        <Link to="/"><li onClick={() => setMenuOpen(false)}>Home</li></Link>
                        <Link to="/pets"><li onClick={() => setMenuOpen(false)}>Pets</li></Link>
                        <Link to="/faq"><li onClick={() => setMenuOpen(false)}>FaQ</li></Link>
                        <li>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="border-[#E0E8E0] border px-5 py-2 rounded-sm w-full text-left hover:bg-[#1C4A2A] hover:text-white transition-all"
                            >
                                Login
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="bg-[#1C4A2A] text-white px-5 py-2 rounded-sm w-full text-left transition-all"
                            >
                                Register
                            </button>
                        </li>
                    </ul>
                </div >
            )}
        </nav >
    );
};

export default NavBar;