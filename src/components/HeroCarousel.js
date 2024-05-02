import React from "react";
import s1 from "../assets/slide1.jpg";
import s2 from "../assets/slide2.JPG";
import s3 from "../assets/slide3.jpg";
import s4 from "../assets/slide4.JPG";
import Carousel from "react-material-ui-carousel";

const HeroCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            animation="slide"
            indicators={true}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
        >
            <div>
                <div className="h-[130px] sm:h-[200px] md:h-[400px] object-cover object-center">
                    <img className="w-full" src={s1} alt="" />
                </div>
            </div>
            <div>
                <div className="h-[130px] sm:h-[200px] md:h-[400px] object-cover object-center">
                    <img className="w-full" src={s2} alt="" />
                </div>
            </div>
            <div>
                <div className="h-[130px] sm:h-[200px] md:h-[400px] object-cover object-center">
                    <img className="w-full" src={s3} alt="" />
                </div>
            </div>
            <div>
                <div className="h-[130px] sm:h-[200px] md:h-[400px] object-cover object-center">
                    <img className="w-full" src={s4} alt="" />
                </div>
            </div>
        </Carousel>
    );
};

export default HeroCarousel;
