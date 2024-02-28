import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";

/*  All routes here to navigate any page */
 const AllRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    );
};
export default AllRoute;