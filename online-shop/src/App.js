import './App.css';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useState } from "react";
import data from "./components/Products/data";
import ProductsDetail from "./components/Products/ProductsList/ProductsDetail/ProductsDetail";

function App() {

    const [productsData, setData] = useState(data.makeUp);

    const setProductCategoryData = (data) => {
        setData(data);
    }

  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Products setProductCategoryData={setProductCategoryData}/>}/>
              <Route path="/products/:productId"
                     element={<ProductsDetail productsData={productsData}/>} />
          </Routes>
      </div>
  );
}

export default App;
