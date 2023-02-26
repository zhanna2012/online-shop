import React, {Component} from 'react';
import './ProductsList.scss'
import { Link } from "react-router-dom";


class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItemsCount: 0,
            cartItems: [],
            itemsCount: 0
        };
    }

    addToCart = (id) => {
        if(!this.state.cartItems.includes(id)) {
            this.setState({
                cartItemsCount: this.state.cartItemsCount + 1,
                cartItems: [...this.state.cartItems, id],
            },
                () => this.props.getCartElements(this.state.cartItemsCount));
        } else {
            this.setState({
                cartItemsCount: this.state.cartItemsCount - 1,
                cartItems: [...this.state.cartItems.filter(item => item !== id)]
            },
                () => this.props.getCartElements(this.state.cartItemsCount));
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.products !== this.props.products) {
            this.setState({
                itemsCount: 0
            })
        }
    }



    render() {
        const renderedItems = this.props.products.map((product) => {
            if(this.props.products.length !== this.state.itemsCount) {
                this.state.itemsCount++;
            }

            return  <li className="border-1 border px-2 py-1 d-block card-item" key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
                <br/>
                <div className="mt-2">
                { product.price }
                    <input
                        type='checkbox' className="mx-2"
                        onClick={() => this.addToCart(product.id)}/>
                </div>

            </li>;
        });

        return (
            <>
                <div className="mt-5 container">
                    <p>Number of items: {this.state.itemsCount}</p>
                    <ul className="card-list list-group d-flex  flex-row justify-content-between">
                        {renderedItems}
                    </ul>
                </div>
            </>
        );
    }
}


export default ProductsList;
