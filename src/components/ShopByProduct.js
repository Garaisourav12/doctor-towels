import React from "react";
import { Link } from "react-router-dom";
import hair from '../assets/hair.jpg';
import bath from '../assets/bath.jpg';
import face from '../assets/face.jpg';
import gym from '../assets/gym.jpg';

function ShopByProduct() {
    return (
        <section className="px-4 md:px-16 my-16">
            <h2 className="text-3xl text-center font-[900] text-[#171717]">
                Shop By Product
            </h2>
            <p className="mt-4 text-1xl md:text-[1.3rem] text-center font-[900] text-[#5c5c5c]">
                Redefining the skincare game for over 10 lakh + Customers &
                Counting
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[3%] gap-y-4 mt-8 md:mt-20">
                <div className="w-full relative">
                    <img className="w-full" src={hair} alt="" />
                    <Link
                        to="/category/hair"
                        className="absolute bottom-[10%] left-[50%] translate-x-[-50%] w-[5rem] border-0 rounded-sm text-center text-[#171717] hover:text-white bg-white hover:bg-[#171717] p-3"
                    >
                        HAIR
                    </Link>
                </div>
                <div className="w-full relative">
                    <img className="w-full" src={bath} alt="" />
                    <Link
                        to="/category/bath"
                        className="absolute bottom-[10%] left-[50%] translate-x-[-50%] w-[5rem] border-0 rounded-sm text-center text-[#171717] hover:text-white bg-white hover:bg-[#171717] p-3"
                    >
                        BATH
                    </Link>
                </div>
                <div className="w-full relative">
                    <img className="w-full" src={face} alt="" />
                    <Link
                        to="/category/face"
                        className="absolute bottom-[10%] left-[50%] translate-x-[-50%] w-[5rem] border-0 rounded-sm text-center text-[#171717] hover:text-white bg-white hover:bg-[#171717] p-3"
                    >
                        FACE
                    </Link>
                </div>
                <div className="w-full relative">
                    <img className="w-full" src={gym} alt="" />
                    <Link
                        to="/category/gym"
                        className="absolute bottom-[10%] left-[50%] translate-x-[-50%] w-[5rem] border-0 rounded-sm text-center text-[#171717] hover:text-white bg-white hover:bg-[#171717] p-3"
                    >
                        GYM
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ShopByProduct;
