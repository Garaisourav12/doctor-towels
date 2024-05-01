import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#faf2e6] text-[#171717] mt-16">
            <div className="container mx-auto py-16 px-4 md:px-12">
                <div className="flex flex-col md:flex-row gap-x-16 gap-y-8 flex-wrap items-start">
                    <div className="md:flex-1">
                        <h3 className="text-[1.3rem] font-semibold">
                            Post-shower Experience Redefined
                        </h3>
                        <p className="mt-2">
                            Experience luxurious, safer towels with us.
                        </p>
                        <div className="flex gap-x-4 mt-4 text-3xl">
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaPinterest />
                            </Link>
                        </div>
                    </div>
                    <div className="md:flex-[.5]">
                        <h3 className="text-[1.3rem] font-semibold">
                            Quick Links
                        </h3>
                        <div className="mt-2 flex flex-col gap-2 items-start">
                            <Link
                                to="/about"
                                className="hover:underline transition-all duration-300"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/contact"
                                className="hover:underline transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/terms_conditions"
                                className="hover:underline transition-all duration-300"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                to="/returns_exchanges"
                                className="hover:underline transition-all duration-300"
                            >
                                Returns & Exchanges
                            </Link>
                            <Link
                                to="/privacy_policy"
                                className="hover:underline transition-all duration-300"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <div className="md:flex-[.5]">
                        <h3 className="text-[1.3rem] font-semibold">
                            VIP Doctor Towels Newsletter
                        </h3>
                        <p className="mt-2">
                            Get special access to weekly exclusive discounts.
                        </p>
                        <div className="mt-4 flex flex-col gap-y-2 items-start">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full rounded-sm border border-gray-400 px-4 py-2 mr-2 placeholder:text-[#171717]"
                            />
                            <button className="bg-white rounded border border-[#171717] px-4 py-2 text-[#171717] hover:bg-[#171717] hover:text-white transition duration-300">
                                Sign Up
                            </button>
                        </div>
                        <div className="flex gap-x-4 mt-4 text-3xl">
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                to="/"
                                className="text-[#171717] hover:text-gray-400 transition duration-300"
                            >
                                <FaPinterest />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 px-4 md:px-12 border-t border-gray-300">
                <div className="container mx-auto flex justify-between items-center">
                    <p className="text-sm">
                        &copy; 2024 Doctor Towels. Powered by Shopify
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
