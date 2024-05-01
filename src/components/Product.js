import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Product({ img, name, price, id }) {
    const navigate = useNavigate();

    const addToCart = (event) => {
        event.preventDefault();
        // Logic for add to cart here

        navigate("/mycart");
    };
    return (
        <div>
            <Link
                to={`/product_detail/${id}`}
                className="flex flex-col items-start"
            >
                <div className="w-full mb-2 relative">
                    <img src={img} className="w-full" alt="" />
                </div>
                <p className="text-gray-600">{name}</p>
                <div className="flex gap-2">
                    <p className="text-gray-600">
                        Rs. {Math.floor(price - price * 0.1)}.00
                    </p>
                    <p className="text-gray-400 line-through">Rs. {price}.00</p>
                </div>

                <div
                    class="product-block-options product-block-options--swatch"
                    data-option-name="Shades of Doctor Towels"
                >
                    <div class="flex gap-2 items-center mt-2">
                        <span class="bg-yellow-600 h-6 w-6 rounded-full inline-block border border-gray-800"></span>
                        <span class="bg-indigo-500 h-6 w-6 rounded-full inline-block"></span>
                        <span class="bg-green-400 h-6 w-6 rounded-full inline-block"></span>
                        <span class="bg-orange-500 h-6 w-6 rounded-full inline-block"></span>
                        <span class="product-block-options__more-label">
                            + 1 more
                        </span>
                    </div>
                </div>

                <button
                    onClick={addToCart}
                    className="bg-white text-gray-600 px-10 py-3 mt-4 rounded-sm border border-gray-600"
                >
                    ADD TO CART
                </button>
            </Link>
        </div>
    );
}

export default Product;
