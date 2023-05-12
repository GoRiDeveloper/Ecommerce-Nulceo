import { DOM_APP, CART } from "../variables.js";

export function totalItems () {

    const 
    
    TOTAL_ITEMS       = CART.reduce((acc, prod) => acc + prod.qty, 0),
    { notifyQtyCart } = DOM_APP;

    if (TOTAL_ITEMS > 0) {

        notifyQtyCart.classList.remove("header__notify--hidden");
        notifyQtyCart.innerText = `${TOTAL_ITEMS}`;

    } else {

        notifyQtyCart.classList.add("header__notify--hidden");

    };

};