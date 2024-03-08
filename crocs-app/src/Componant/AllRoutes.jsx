import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import { Login } from "../Page/Login";
import Register from "../Page/Register";
import { Products } from "../Page/Products";
import { Men } from "../Page/Men";
import { Women } from "../Page/Women";
import { Kid } from "../Page/Kid";
import ProductDetails from "../Page/ProductDetails";
import Wishlist from "../Page/Wishlist";
import { Cart } from "../Page/Cart";
import PaymentSuccessPage from "../Page/PymentSuccessPage";

/*  All routes here to navigate any page */
 const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/product" element={<Products/>}/>
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>}/>
            <Route path="/kid" element={<Kid/>} />
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/paymentsuccess" element={<PaymentSuccessPage/>}/>
        </Routes>
    );
};
export default AllRoute;