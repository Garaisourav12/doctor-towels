import React, { useEffect, useState } from "react";
import cartContext from "./cartContext";

function CartContextProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || {});

    useEffect(() => {
        // save to local store
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (id, quantity) => {
        setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + quantity }));
    };

    const removeFromCart = (id) => {
        if(cart[id]){
            setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
        }
    };
    
    const removeAllFromCart = (id) => {
        if(cart[id]){
            // delete this id from cart
            delete cart[id];
            setCart((prev) => ({ ...prev }));
        }
    };
    
    const checkoutCart = () => {
        setCart({});
    }

    return (
        <cartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                removeAllFromCart,
                checkoutCart,
            }}
        >
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;
