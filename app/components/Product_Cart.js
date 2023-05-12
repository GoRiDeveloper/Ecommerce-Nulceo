import { DATABASE, CART, DOM_APP } from "../variables.js";
import { totalItems } from "../utils/total_items.js";
import { totalPrice } from "../utils/total_price.js";
import { saveLocalStorage } from "../helpers/local_storage.js";
import { generateProdCart } from "../utils/generate_product_cart.js";

function printCart (prod, exists) {

    const { cartList } = DOM_APP;

    if (exists) {

        const 
        
        EXISTS              = CART.find(item => item.id === prod.id),
        LIST_ALL_PRODS_CART = cartList.querySelectorAll(".cart__product");

        LIST_ALL_PRODS_CART.forEach(item => {

            const ID = Number(item.dataset.id);

            if (prod.id === ID) {

                const COUNT = item.querySelector(".cart__count");
                COUNT.value = EXISTS.qty;

            };

        });

    } else {

        const 
        
        { id, qty } = prod,
        PROD_INFO   = DATABASE.find(item => item.id === id),
        { 

            image, 
            title, 
            price,
            stock

        }    = PROD_INFO,
        DATA = {

            id,
            image,
            title, 
            price,
            qty, 
            stock

        },
        PROD_CART = generateProdCart(DATA);

        cartList.appendChild(PROD_CART);

    };

    totalItems();
    totalPrice();
    saveLocalStorage("cart", CART);

};

function addToCart (id, qty = 1) {

    const 
    
    PROD = DATABASE.find(item => item.id === id),

    EXISTS = CART.find(item => {

        if (item.id === id) {

            if (item.qty >= PROD.stock || PROD.stock === 0)
                throw new Error("No hay Stock suficiente.");

            item.qty += qty;

            printCart({ id }, true);
            return item;

        };

    });

    if (PROD.stock === 0 && !EXISTS)
        throw new Error("No hay Stock suficiente.");

    if (!EXISTS) {

        const PROD = {
            id,
            qty
        };

        CART.push(PROD);
        printCart(PROD, false);

    };

};

export function ProductCart (e) {

    const 
    
    PROD_BUTTON   = e.target.closest(".product__button"),
    PROD_INFO_ADD = e.target.closest(".prodInfo__addBtn");

    if (PROD_BUTTON) {

        const 
        
        GET_ID = PROD_BUTTON.dataset.id,
        ID     = Number(GET_ID),
        PROD   = DATABASE.find(item => item.id === ID);

        addToCart(PROD.id);

    };

    if (PROD_INFO_ADD) {

        const

        GET_ID = PROD_INFO_ADD.dataset.id,
        ID     = Number(GET_ID),
        PROD   = DATABASE.find(item => item.id === ID);

        addToCart(PROD.id);

    };

};