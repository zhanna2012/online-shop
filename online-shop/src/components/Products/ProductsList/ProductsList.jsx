import React, {useContext, useEffect, useState} from 'react';
import styles from './ProductsList.module.scss'
import { Link } from "react-router-dom";
import {Context} from "../../../context";


function ProductsList(props) {

    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const { productsData, setProductCategoryData } = useContext(Context);


    useEffect(() => {
        props.getCartElements(cartItemsCount);
    }, [cartItemsCount])

    const addToCart = (id) => {
        if(!cartItems.includes(id)) {
            setCartItemsCount((prevState) => prevState + 1);
            setCartItems((prevState) => [...prevState, id]);
        } else {
            setCartItemsCount((prevState) => prevState - 1);
            setCartItems((prevState) => [...prevState.filter(item => item !== id)]);
        }
    }


    useEffect( () => {
        return () => setItemsCount(0);
    }, [productsData])


    const renderItems = () => {
        return productsData.map((product) => {
            return  <li className={`border-1 border px-2 py-1 d-block ${styles.cardItem}`} key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
                <br/>
                <div className="mt-2">
                    { product.price }
                    <input
                        type='checkbox' className="mx-2"
                        onClick={() => addToCart(product.id)}/>
                </div>

            </li>;
        });
    }



    return (
        <>
            <div className="mt-5 container">
                <p>Number of items: {productsData.length}</p>
                <ul className="card-list list-group d-flex  flex-row justify-content-between">
                    {renderItems()}
                </ul>
            </div>
        </>
    );
}


export default ProductsList;
