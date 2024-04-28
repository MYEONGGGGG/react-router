import './App.css';
import Mainpage from "./page/Mainpage";
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage';
import ProductDetailPage from "./page/ProductDetailPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Mainpage/>}/>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/about" element={<Aboutpage/>}/>
            <Route path="/products" element={<Productpage/>}/>
            <Route path="/products/:id" element={<ProductDetailPage/>}/>
            {/*<Route path="/products/:id/:num" element={<ProductDetailPage/>}/>*/}
        </Routes>
    </div>
  );
}

export default App;
