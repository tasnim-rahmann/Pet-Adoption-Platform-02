import { MdPets } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { FaUserCircle } from "react-icons/fa";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logoutUser } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
    };

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
                    {user ? (
                        <div className="flex items-center justify-center gap-6">
                            <div className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <span
                                className="hover:-translate-y-0.5 cursor-pointer"
                                onClick={handleOpen}
                            >
                                <FaUserCircle size={30} />
                            </span>
                            {isOpen && (
                                <div className="absolute top-15">
                                    <ul className="bg-gray-200 rounded-sm">
                                        <Link to="/dashboard"><li className="px-3 py-1 hover:bg-gray-300" onClick={() => setIsOpen(false)}>Dashboard</li></Link>
                                        <Link to="/" onClick={logoutUser}><li className="px-3 py-1 hover:bg-gray-300" onClick={() => setIsOpen(false)}>Log out</li></Link>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="border-[#E0E8E0] border px-5 py-2 rounded-sm hover:bg-[#1C4A2A] hover:text-white transition-all cursor-pointer">
                                    Login
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="bg-[#1C4A2A] text-white px-5 py-2 rounded-sm transition-all cursor-pointer">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
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
                        <Link to="/dashboard"><li onClick={() => setMenuOpen(false)}>Dashboard</li></Link>
                        {user ? (
                            <Link to="/" onClick={logoutUser}><li onClick={() => setMenuOpen(false)}>Log out</li></Link>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">
                                        <button
                                            onClick={() => setMenuOpen(false)}
                                            className="border-[#E0E8E0] border px-5 py-2 rounded-sm w-full text-left hover:bg-[#1C4A2A] hover:text-white transition-all"
                                        >
                                            Login
                                        </button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register">
                                        <button
                                            onClick={() => setMenuOpen(false)}
                                            className="bg-[#1C4A2A] text-white px-5 py-2 rounded-sm w-full text-left transition-all"
                                        >
                                            Register
                                        </button>
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div >
            )}
        </nav >
    );
};

export default NavBar;