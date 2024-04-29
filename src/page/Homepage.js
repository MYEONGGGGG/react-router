import React from "react";
import { Link, useNavigate } from "react-router-dom";

/** Link 방식으로 페이지 이동 */
const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage = () => {
        navigate('/products');
    };

    return (
        <div className="container">
            <h1>Homepage</h1>
            <Link to="/">Go to Main page!</Link>
            <Link to="/About">Go to About page!</Link>
            <button onClick={goProductPage}>go to product page</button>
        </div>
    );
};

export default Homepage;