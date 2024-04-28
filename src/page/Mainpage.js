import React from "react";
import { Link } from "react-router-dom";

const Mainpage = () => {
    return (
        <div className="container">
            <h1>Mainpage</h1>
            <Link to="/Home">Home page</Link>
            <Link to="/About">About page</Link>
        </div>
    );
};

export default Mainpage;