import React, {Component} from 'react';

class Cart extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <div className="px-4">Cart: { this.props.cartElementsCount}</div>
            </>
        );
    }
}


export default Cart;
