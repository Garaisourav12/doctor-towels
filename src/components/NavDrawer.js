import React from "react";
import { Drawer, Button } from "antd";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavDrawer = ({ visible, setVisible }) => {
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="md:hidden">
            <Drawer
                placement="left" // Set placement to right
                closable={false}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ padding: 0}}
                width={300}
                className="md:hidden"
            >
                <div className="flex justify-end items-center gap-2 border-b border-gray-300 px-6 py-4">
                    <button
                        onClick={onClose}
                        className="flex justify-center items-center"
                    >
                        <IoMdClose className="text-2xl" />
                    </button>
                </div>
                <div className="py-4 px-6 flex flex-col gap-2 text-[1.1rem] font-bold">
                    <NavLink to="/" className="hover:underline hover:text-[#b61d0f]">Home</NavLink>
                    <NavLink to="/towels" className="hover:underline hover:text-[#b61d0f]">Towels</NavLink>
                    <NavLink to="/shop_by_material" className="hover:underline hover:text-[#b61d0f]">Shop By Material</NavLink>
                    <NavLink to="/thirsty_towel" className="hover:underline hover:text-[#b61d0f]">Thirsty Towel</NavLink>
                    <NavLink to="/combo" className="hover:underline hover:text-[#b61d0f]">Combo</NavLink>
                    <NavLink to="/gifting" className="hover:underline hover:text-[#b61d0f]">Gifting</NavLink>
                    <NavLink to="/summer_store" className="hover:underline text-[#b61d0f] hover:text-[#b61d0f]">Summer Store</NavLink>
                    <NavLink to="/blogs" className="hover:underline hover:text-[#b61d0f]">Blogs</NavLink>
                </div>
            </Drawer>
        </div>
    );
};

export default NavDrawer;
