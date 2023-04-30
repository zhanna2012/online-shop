import {Component, useContext, useEffect, useState} from 'react';
import ProductsList from "./ProductsList/ProductsList";
import data from "./data";
import Cart from "./Cart/Cart";
import {Context} from "../../context";
import { useNavigate, useParams} from "react-router-dom";


function Products(props) {

    const { category } = useParams();

    const navigate = useNavigate();

    const [cartElementsCount, setCartElementsCount] = useState(0);
    const { productsData, setProductCategoryData } = useContext(Context);

    useEffect(() => {
        if(category) {
            setProductCategoryData(data[`${category}`])
        }
    },[category, setProductCategoryData]);



    const getCartElements = (count) => {
        setCartElementsCount(count);
    };

    return (
        <>
            <div className="justify-content-center d-flex align-items-center">
                <Cart className="mr-4" cartElementsCount={cartElementsCount}/>
                <button className='btn btn-primary'
                        onClick={() => {
                            navigate("/categories/makeUp");
                        }}>
                    Макіяж
                </button>
                <button className="btn btn-primary"
                        onClick={() => {
                            navigate("/categories/hair");
                        }
                        }>
                    Для волосся
                </button>
                <button className="btn btn-primary"
                        onClick={() => {
                            navigate("/categories/bath");
                        }
                        }>
                    Для ванни
                </button>
            </div>
            <ProductsList
                getCartElements={getCartElements}></ProductsList>
        </>
    );
}


export default Products;
