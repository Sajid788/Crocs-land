import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import { Login } from "../Page/Login";
import Register from "../Page/Register";
import { Products } from "../Page/Products";
import { Men } from "../Page/Men";

/*  All routes here to navigate any page */
 const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/product" element={<Products/>} />
            <Route path="/men" element={<Men/>} />
        </Routes>
    );
};
export default AllRoute;