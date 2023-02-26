import { Component } from 'react';
import ProductsList from "./ProductsList/ProductsList";
import data from "./data";
import Cart from "./Cart/Cart";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.makeUp,
            cartElementsCount: 0,
        };
    }

    handleItemsChange = (value) => {
        switch (value) {
            case 'make-up':
                this.setState({
                    products: data.makeUp
                }, ()=>this.props.setProductCategoryData(data.makeUp))
                break;
            case 'hair':
                this.setState({
                    products: data.hair
                }, ()=>this.props.setProductCategoryData(data.hair))
                break;
            case 'bath':
                this.setState({
                    products: data.bath
                }, ()=>this.props.setProductCategoryData(data.bath))
                break;
            default:
                break;
        }
    }

    getCartElements = (count) => {
        this.setState({
            cartElementsCount: count,
        });
    };

    render() {
        return (
            <>
                <div className="justify-content-center d-flex align-items-center">
                    <Cart className="mr-4" cartElementsCount={this.state.cartElementsCount}/>
                    <button className='btn btn-primary'
                        onClick={() => this.handleItemsChange('make-up')}>
                        Макіяж
                    </button>
                    <button className="btn btn-primary"
                        onClick={() => this.handleItemsChange('hair')}>
                        Для волосся
                    </button>
                    <button className="btn btn-primary"
                        onClick={() => this.handleItemsChange('bath')}>
                        Для ванни
                    </button>
                </div>
                <ProductsList
                    getCartElements={this.getCartElements}
                    products={this.state.products}></ProductsList>
            </>
        );
    }
}

export default Products;
