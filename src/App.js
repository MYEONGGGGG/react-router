import './App.css';
import Mainpage from "./page/Mainpage";
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage';
import ProductDetailPage from "./page/ProductDetailPage";
import { LoginPage } from "./page/LoginPage";
import { UserPage } from "./page/UserPage";
import {Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";

function App() {
    const [authenticate, setAuuthenticate] = useState(false);

    const PrivateRoute = () => {
        return authenticate === true?<UserPage/>:<Navigate to="/login"/>
    };

  return (
    <div>
        <Routes>
            <Route path="/" element={<Mainpage/>}/>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="/products" element={<Productpage/>}/>
            <Route path="/products/:id" element={<ProductDetailPage/>}/>
            {/*<Route path="/products/:id/:num" element={<ProductDetailPage/>}/>*/}

            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/user" element={<PrivateRoute/>}/>
        </Routes>
    </div>
  );
}

export default App;
