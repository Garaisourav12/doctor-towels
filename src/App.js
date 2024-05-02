import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import CartDrawer from "./components/CartDrawer";
import NavDrawer from "./components/NavDrawer";

function App() {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <div className="w-full min-h-screen bg-white">
            <Header />
            <NavBar setVisible={setVisible} setVisible2={setVisible2} />
            <CartDrawer visible={visible} setVisible={setVisible} />
            <NavDrawer visible={visible2} setVisible={setVisible2} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mycart" element={<Cart />} />
                <Route path="/category/:category" element={<Category setVisible={setVisible} />} />
                <Route path="/product_detail/:id" element={<ProductDetail setVisible={setVisible} />} />
            </Routes>
            <Footer />


        </div>
    );
}

export default App;
