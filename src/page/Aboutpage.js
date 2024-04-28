import React from "react";
import { useNavigate } from "react-router-dom";

/** Navigate 방식으로 페이지 이동(함수안에서 이동해야하는 경우 사용) */
const Aboutpage = () => {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/');
    };

    const goToHome = () => {
      navigate('/Home');
    };

    return (
        <div className="container">
            <h1>Aboutpage</h1>
            <button onClick={goToMain}>Go to Main</button>
            <button onClick={goToHome}>Go to Homepage</button>
        </div>
    );
};

export default Aboutpage;