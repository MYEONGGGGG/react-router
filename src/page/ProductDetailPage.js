import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <h1>ProductDetailPage</h1>
            <span>id: {id}</span>
        </div>
    );
};

export default ProductDetailPage;