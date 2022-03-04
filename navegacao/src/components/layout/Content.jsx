import React from "react";
import "./Content.css";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";
import { Routes, Route } from "react-router-dom";

const Content = (props) => (
    <main className="Content">
        <Routes>
            <Route path="/param/:id" element={<Param />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
);

export default Content;
