import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import p1 from '../assets/product1.jpg'
import p2 from '../assets/product2.jpg'
import p3 from '../assets/product3.jpg'
import cartContext from "../context/cartContext";

function Product({ name, price, id, setVisible }) {
    const navigate = useNavigate();
    const images = [p1, p2, p3];
    const [img, setImg] = React.useState(0);
    const { addToCart } = useContext(cartContext);

    const handleAddToCart = (event) => {
        event.preventDefault();
        addToCart(id+'', 1);
        setVisible(true);
    };

    return (
        <div>
            <Link
                to={`/product_detail/${id}`}
                className="flex flex-col items-center md:items-start"
            >
                <div className="w-full mb-2 relative">
                    <img src={images[img]} className="w-full" alt="" />
                </div>
                <p className="text-gray-600">{name}</p>
                <div className="flex gap-2">
                    <p className="text-gray-600">
                        Rs. {Math.floor(price - price * 0.1)}.00
                    </p>
                    <p className="text-gray-400 line-through">Rs. {price}.00</p>
                </div>

                <div
                    className="product-block-options product-block-options--swatch"
                    data-option-name="Shades of Doctor Towels"
                >
                    <div className="flex gap-3 items-center mt-2">
                        <span className="bg-yellow-600 h-3 w-3 rounded-full inline-block"></span>
                        <span className="bg-indigo-500 h-3 w-3 rounded-full inline-block"></span>
                        <span className="bg-green-400 h-3 w-3 rounded-full inline-block"></span>
                        <span className="bg-orange-500 h-3 w-3 rounded-full inline-block"></span>
                        <span className="text-gray-600 text-sm">
                            + 1 more
                        </span>
                    </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="bg-white text-gray-600 px-10 py-3 mt-4 rounded-sm border border-gray-600"
                >
                    ADD TO CART
                </button>
            </Link>
        </div>
    );
}

export default Product;
