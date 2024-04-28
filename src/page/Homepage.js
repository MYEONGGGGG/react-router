import React from "react";
import { Link } from "react-router-dom";

/** Link 방식으로 페이지 이동 */
const Homepage = () => {
    return (
        <div className="container">
            <h1>Homepage</h1>
            <Link to="/">Go to Main page!</Link>
            <Link to="/About">Go to About page!</Link>
        </div>
    );
};

export default Homepage;