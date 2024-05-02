import React, { useContext } from "react";
import { Drawer, Button } from "antd";
import { IoMdClose } from "react-icons/io";
import cartContext from "../context/cartContext";
import CartProduct from "./CartProduct";

const CartDrawer = ({ visible, setVisible }) => {
    const { cart, checkoutCart } = useContext(cartContext);

    const cartArray = Object.entries(cart);

    const totalPrice = cartArray.reduce((acc, [id, quantity]) => {
        return acc + 599 * quantity;
    }, 0);

    const onClose = () => {
        setVisible(false);
    };

    const handleCheckout = () => {
        const confirm = window.confirm("Are you sure you want to checkout?");
        if (confirm) {
            checkoutCart();
            setVisible(false);
            window.location.reload();
            // We can add toast here
        }
    };

    return (
        <div>
            <Drawer
                placement="right" // Set placement to right
                closable={false}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ padding: 0 }}
                maxWidth={350}
            >
                <div className="flex justify-between items-center gap-2 border-b border-gray-300 px-4 py-4">
                    <h2 className="text-2xl font-bold">My Cart</h2>
                    <button
                        onClick={onClose}
                        className="flex justify-center items-center"
                    >
                        <IoMdClose className="text-2xl" />
                    </button>
                </div>
                <div className="flex-1 py-4 px-4 flex flex-col gap-4 overflow-y-auto h-[80vh]">
                    {cartArray.length === 0 && (
                        <p className="text-center text-2xl font-bold py-20">
                            Cart is empty
                        </p>
                    )}
                    {cartArray.map((item) => {
                        return (
                            <CartProduct
                                key={item[0]}
                                id={item[0]}
                                quantity={item[1]}
                            />
                        );
                    })}
                </div>
                {cartArray.length > 0 && (
                    <div className="flex justify-between items-center px-4 py-2 border-t border-gray-300">
                        <p className="font-semibold">
                            Total: Rs. {totalPrice}.00
                        </p>
                        <button
                            className="px-4 py-2 transition-all duration-300 rounded-sm border border-gray-700 hover:bg-gray-700 hover:text-white"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </Drawer>
        </div>
    );
};

export default CartDrawer;
