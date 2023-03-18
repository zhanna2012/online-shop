import React from 'react';

function Cart(props) {


    return (
        <>
            <div className="px-4">Cart: { props.cartElementsCount}</div>
        </>
    );
}


export default Cart;
