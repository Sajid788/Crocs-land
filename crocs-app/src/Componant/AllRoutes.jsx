import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import { Login } from "../Page/Login";

/*  All routes here to navigate any page */
 const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    );
};
export default AllRoute;