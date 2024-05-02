import React from "react";
import { IoIosMenu } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import HoverNavLink from "./HoverNavLink";

function NavBar({ setVisible, setVisible2 }) {
    return (
        <nav className="flex flex-col bg-white border-b border-gray-300 sticky top-0 z-[100]">
            <div className="flex justify-between items-center py-1 px-2 md:px-8">
                <div className="flex gap-1">
                    <button
                        className="md:hidden"
                        onClick={() => setVisible2(true)}
                    >
                        <IoIosMenu className="text-[1.8rem]" />
                    </button>
                    <button className="flex gap-1 items-center text-[.9rem]">
                        <GoSearch className="text-[1.5rem]" />
                        <span className="hidden md:block text-[.8rem]">
                            Search
                        </span>
                    </button>
                </div>
                <Link to="/" className="flex">
                    <img
                        className="w-[8rem] md:w-[11rem]"
                        src="https://doctortowels.com/cdn/shop/files/doctor_towel_it_s_safe_logo_340x.jpg?v=1695272776"
                        alt=""
                    />
                </Link>
                <Link to="/mycart" className="flex gap-1">
                    <span className="hidden md:block font-thin text-[.9rem]">
                        Cart
                    </span>
                    <BsCart3 className="text-[1.5rem]" />
                </Link>
            </div>
            <div className="hidden md:flex flex-wrap justify-center items-center gap-x-8 font-bold px-2 md:px-8 border-t border-gray-300">
                <HoverNavLink to="/" className="py-4 relative hover:text-[#b61d0f]">
                    Home
                </HoverNavLink>
                <HoverNavLink to="/towels" className="py-4 relative hover:text-[#b61d0f]">
                    Towels
                </HoverNavLink>
                <HoverNavLink to="/shop_by_material" className="py-4 relative hover:text-[#b61d0f]">
                    Shop By Material
                </HoverNavLink>
                <HoverNavLink to="/thirsty_towel" className="py-4 relative hover:text-[#b61d0f]">
                    Thirsty Towel
                </HoverNavLink>
                <HoverNavLink to="/combo" className="py-4 relative hover:text-[#b61d0f]">
                    Combo
                </HoverNavLink>
                <HoverNavLink to="/gifting" className="py-4 relative hover:text-[#b61d0f]">
                    Gifting
                </HoverNavLink>
                <HoverNavLink
                    to="/summer_store"
                    className="py-4 relative text-[#b61d0f] hover:text-[#b61d0f]"
                >
                    Summer Store
                </HoverNavLink>
                <HoverNavLink to="/blogs" className="py-4 relative hover:text-[#b61d0f]">
                    Blogs
                </HoverNavLink>
            </div>
        </nav>
    );
}

export default NavBar;
