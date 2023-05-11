import {Component, useContext, useEffect, useState} from 'react';
import ProductsList from "./ProductsList/ProductsList";
import data from "./data";
import Cart from "./Cart/Cart";
import {Context} from "../../context";
import { useNavigate, useParams} from "react-router-dom";
import Button from "../../common/Button/Button";


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
                <Button
                    buttonText='Макіяж'
                        onClick={() => {
                            navigate("/categories/makeUp");
                        }}>
                </Button>
                <Button buttonText='Для волосся'
                        onClick={() => {
                            navigate("/categories/hair");
                        }
                        }>
                </Button>
                <Button buttonText='Для ванни'
                        onClick={() => {
                            navigate("/categories/bath");
                        }
                        }>
                </Button>
            </div>
            <ProductsList
                getCartElements={getCartElements}></ProductsList>
        </>
    );
}


export default Products;
