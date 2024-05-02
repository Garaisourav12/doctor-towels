import React, { useContext } from 'react';
import cartContext from '../context/cartContext';
import image from '../assets/product1.jpg';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function CartProduct({ id, quantity }) {
    const { addToCart, removeFromCart, removeAllFromCart } = useContext(cartContext);

    const handleIncreaseQuantity = () => {
        addToCart(id, 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            removeFromCart(id);
        }
    };

    const handleRemoveFromCart = () => {
        removeAllFromCart(id);
    };

    return (
        <div className="flex justify-start items-start gap-2 border-0 border-gray-300">
            <Link to={`/product_detail/${id}`} className='flex items-start gap-2 text-gray-800 hover:text-gray-800 hover:underline duration-300'>
                <img src={image} alt='' className="h-28 object-cover object-center overflow-hidden" />
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold">{"Product Name"}</h3>
                </div>
            </Link>

            <div className='flex flex-col justify-start items-end gap-1 ml-auto mr-0'>
                <div className='flex flex-col justify-start gap-1'>
                    <div className="flex items-center border rounded-sm border-gray-300">
                        <button className="flex justify-center items-center w-8 h-8 cursor-pointer border-r border-gray-300" onClick={handleDecreaseQuantity}>
                            <FaMinus />
                        </button>
                        <p className="text-[.8rem] flex justify-center items-center w-8 h-8">{quantity}</p>
                        <button className="flex justify-center items-center w-8 h-8 cursor-pointer border-l border-gray-300" onClick={handleIncreaseQuantity}>
                            <FaPlus />
                        </button>
                    </div>
                    <button className="text-red-500 cursor-pointer" onClick={handleRemoveFromCart}>Remove</button>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <p className="text-[.8rem] font-semibold text-gray-500">Price: Rs. {599}</p>
                    <p className="text-[.8rem] font-semibold text-gray-500">Total Price: Rs. {599 * quantity}</p>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;
