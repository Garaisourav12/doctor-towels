import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HoverNavLink = ({ to, children, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <NavLink
            to={to}
            className={className+" transition-all duration-300"}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {/* 0 to 100% border button on hover from middle bottom */}
            <span
                className="absolute bottom-0 translate-y-[60%] left-1/2 translate-x-[-50%] h-[2px] bg-[#b61d0f] transition-all duration-300"
                style={{ width: isHovered ? "100%" : "0" }} // Dynamic width based on hover state
            ></span>
        </NavLink>
    );
};

export default HoverNavLink;
