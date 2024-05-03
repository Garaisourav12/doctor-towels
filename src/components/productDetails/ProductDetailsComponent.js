import { useContext, useState } from "react";
import "./style.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Accordion, { Title, Content } from "../Accordion";
import cartContext from "../../context/cartContext";

let colorList = ["#1ed760", "blue", "black", "#2b4947"];
let imageList = [
    {
        id: 1,
        img: "https://doctortowels.com/cdn/shop/products/doctor_towels_banana_viscose_and_cotton_solid_textured_banana_x_cotton_hand_towel_full_size_african_mud_red_orange_blueberry_bottle_green_pack_of_2_900x.jpg?v=1687175051",
    },
    {
        id: 2,
        img: "https://doctortowels.com/cdn/shop/products/doctor_towels_banana_viscose_and_cotton_solid_textured_1_banana_x_cotton_hand_towel_full_size_african_mud_red_orange_blueberry_bottle_green_pack_of_2_900x.jpg?v=1687175069",
    },
    {
        id: 3,
        img: "https://doctortowels.com/cdn/shop/products/doctor_towels_banana_viscose_and_cotton_solid_textured_3_banana_x_cotton_hand_towel_full_size_african_mud_red_orange_blueberry_bottle_green_pack_of_2_900x.jpg?v=1687175098",
    },
];

function ProductDetailComponent({ setVisible, id }) {
    const { addToCart } = useContext(cartContext);
    const [quantity, setQuantity] = useState(1);
    const [active, setActive] = useState(null);
    const [img, setImg] = useState(imageList[0].img);

    const handleAddToCart = () => {
        addToCart(id, quantity);
        setVisible(true);
    };

    const handleColor = (color) => {
        setActive(color);
    };

    const handleImage = (img) => {
        setImg(img);
    };

    return (
        <section className="px-4 md:px-28 py-2 flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-1">
                <div className="flex">
                    <img className="max-w-full w-[150rem]" src={img} alt="" />
                </div>
                <div className="flex items-center gap-2 w-100 overflow-x-auto">
                    {imageList.map((image) => {
                        return (
                            <img
                                key={image.id}
                                onClick={() => handleImage(image.img)}
                                src={image.img}
                                className={`${
                                    img === image.img
                                        ? "w-[6rem] h-[6rem] border-slate-700 border-b-4"
                                        : "w-[6rem] h-[6rem] border-gray-700"
                                } cursor-pointer`}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="product-data md:h-[130vh] md:overflow-y-auto">
                <div className="info mt-4 font-bold">
                    <h1 className="text-2xl">Banana X Cotton Hand Towel</h1>
                    <p className="flex gap-4 my-2 align-items-center">
                        <span className="text-rose-700">Rs. 799.00 </span>
                        <del className="text-gray-500">Rs. 1,299.00 </del>
                        <span className="text-[.8rem] text-rose-700 mt-[.4rem]">
                            {" "}
                            (38% OFF)
                        </span>
                    </p>
                    <p className="text-rose-400 font-bold tracking-widest">
                        Receive a Free Cotton Bath Towel automatically on orders
                        over Rs 1,699
                    </p>
                </div>
                <hr className="my-4" />
                {/* shades of color */}
                <div>
                    <p className="text-[.8rem] tracking-wide text-gray-600">
                        {" "}
                        <b>Shades of Doctor Towels :</b>
                        <span className="text-gray-400"> African Mud</span>
                    </p>
                    <div className="flex align-items-center p-2 gap-2">
                        {colorList.map((color, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleColor(color)}
                                    className={
                                        active === color
                                            ? "border-slate-700 border-2 p-[3px] rounded-full transition-all "
                                            : " p-[3px] rounded-full hover:border-gray-300 border-2"
                                    }
                                >
                                    <div
                                        className={` w-[1.5rem] h-[1.5rem] rounded-full `}
                                        style={{ backgroundColor: color }}
                                    ></div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col items-start gap-1">
                            <h4 className="text-[.8rem] font-bold tracking-wide text-gray-600">
                                Material
                            </h4>
                            <span
                                className="p-2 rounded text-gray-500 font-[500] cursor-pointer"
                                style={{ border: "2px solid black" }}
                            >
                                Pack of 2
                            </span>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <h4 className="text-[.8rem] font-bold tracking-wide text-gray-600">
                                Size
                            </h4>
                            <span
                                className="p-2 rounded text-gray-500 font-[500] cursor-pointer"
                                style={{ border: "2px solid black" }}
                            >
                                40 x 60 cm
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-4 cursor-pointer">
                    <img
                        src="https://doctortowels.com/cdn/shop/files/Holi_banner_atc.jpg?v=1710758272"
                        alt=""
                    />
                </div>

                {/*  */}
                <div className="flex gap-2 flex-col items-start ">
                    <h4 className="text-[.8rem] font-bold tracking-wide text-gray-600">
                        Qunatity
                    </h4>

                    <div className="flex gap-2 items-center">
                        <button
                            className=" text-gray-600 w-[2.5rem] h-[2rem] flex items-center justify-center rounded hover:border-gray-700"
                            style={{ border: "1px solid gray" }}
                            onClick={() =>
                                setQuantity((prev) => {
                                    if (prev > 1) return quantity - 1;
                                    return quantity;
                                })
                            }
                        >
                            <FaMinus />
                        </button>
                        <span
                            className="text-xl text-gray-600  w-[2.5rem] h-[2rem] flex items-center justify-center rounded hover:border-gray-700"
                            style={{ border: "1px solid gray" }}
                        >
                            {quantity}
                        </span>
                        <button
                            className=" text-gray-600  w-[2.5rem] h-[2rem] flex items-center justify-center rounded hover:border-[black]"
                            style={{ border: "1px solid gray" }}
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            <FaPlus />
                        </button>
                    </div>
                    <button
                        className="mt-2 border-2 border-gray-600 px-6 py-2 rounded  tracking-widest text-[.8rem] hover:bg-gray-600 hover:text-white"
                        onClick={handleAddToCart}
                    >
                        ADD TO CART
                    </button>
                </div>

                <div className="mt-6">
                    <h2 className="font-semibold mb-4">Description</h2>
                    <p className="text-gray-600 mb-4">
                        Our Musa-Cotton Towels are inherently antibacterial. As
                        if this wasn’t enough, we also give them additional
                        antimicrobial treatment, just so that you feel as safe
                        as possible! Unwind and unwrap pristine post-shower
                        bliss with our incredibly safe Musa-Cotton Towels!
                    </p>
                    <h3 className="font-semibold mb-2">Material:</h3>
                    <p className="text-gray-600 mb-4">
                        35% Banana viscose , 65% cotton
                    </p>
                    <h3 className="font-semibold mb-2">How it's made?</h3>
                    <p className="text-gray-600 mb-4">
                        Doctor Towel is a homegrown brand from a team
                        experienced textile pioneers catering to some of the
                        largest global brands in the world. We bring you a towel
                        made from carefully chosen materials, genuine care and
                        greatest attention to detail.
                    </p>
                    <h3 className="font-semibold mb-2">
                        Designed for quick absorbency &amp; softness:
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Made along with Banana Viscose yarn, these towels are
                        cloud-soft and super gentle on all skin types.
                    </p>
                    <h3 className="font-semibold mb-2">Best for:</h3>
                    <p className="text-gray-600 mb-4">Normal to oily skin</p>
                </div>

                <div className="border-y-[.3px] border-gray-200">
                    <Accordion>
                        <Title>Additional Information 1</Title>
                        <Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat praesentium distinctio qui eius sint
                            modi quae id nobis laboriosam corporis!
                        </Content>
                    </Accordion>
                    <Accordion>
                        <Title>Additional Information 2</Title>
                        <Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat praesentium distinctio qui eius sint
                            modi quae id nobis laboriosam corporis!
                        </Content>
                    </Accordion>
                    <Accordion>
                        <Title>Additional Information 3</Title>
                        <Content>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat praesentium distinctio qui eius sint
                            modi quae id nobis laboriosam corporis!
                        </Content>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default ProductDetailComponent;
