import React from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div className="w-full min-h-screen bg-white">
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mycart" element={<Cart />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/product_detail/:id" element={<ProductDetail />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
