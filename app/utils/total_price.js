import { DATABASE, CART, DOM_APP } from "../variables.js";

export function totalPrice () {

    const 
    
    { cartTotalPrice } = DOM_APP,
    TOTAL_PRICE        = CART.reduce((acc, prodCart) => {

        const PROD = DATABASE.find(item => item.id === prodCart.id);
        return acc + PROD.price * prodCart.qty;

    }, 0);

    cartTotalPrice.innerText = `${TOTAL_PRICE.toFixed(2)}`;

};