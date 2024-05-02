import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const title = React.Children.toArray(children).find(child => child.type === 'Title');
    const content = React.Children.toArray(children).find(child => child.type === 'Content');

    return (
        <div className="border-y-[.3px] border-gray-200 flex flex-col py-3">
            <div className={`flex justify-between items-center ${isOpen ? 'mb-2' : ''}`}>
                {/* title */}
                {children[0]}
                <button
                    className={`flex ${isOpen ? '' : '-rotate-90'} transition-all duration-300`}
                    onClick={toggleAccordion}
                >
                    {isOpen ? <FiMinus /> : <FiPlus />}
                </button>
            </div>
            <p className={`text-gray-600 ${isOpen ? 'h-fit' : 'h-0'} transition-all duration-500 overflow-hidden`}>{children[1]}</p>
        </div>
    );
};

const Title = ({ children }) => <h3 className="text-gray-700 font-semibold">{children}</h3>;
const Content = ({ children }) => <>{children}</>;

export { Title, Content };

export default Accordion;