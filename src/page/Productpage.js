import React from "react";
import { useSearchParams } from "react-router-dom";

const Productpage = () => {
    let [query, setQuery] = useSearchParams();
    console.log(query.get('q'));

    return (
        <div className="container">
            <h1>Productpage</h1>
        </div>
    );
};

export default Productpage;