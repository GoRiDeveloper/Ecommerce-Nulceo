import { DATABASE, CART, DOM_APP } from "../variables.js";
import { totalItems } from "../utils/total_items.js";
import { totalPrice } from "../utils/total_price.js";
import { generateProdCart } from "../utils/generate_product_cart.js";
import { saveLocalStorage, getItemLocalStorage } from "../helpers/local_storage.js";

function printCart (cart) {

    const { cartList } = DOM_APP;

    cart.forEach(prodCart => {

        const 
        
        { id, qty } = prodCart,
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

    });

};

function setCart (cart) {

    cart.forEach(storageProd => CART.push(storageProd));

};

function deleteProdToCart (e) {

    const 
    
    { cartList }  = DOM_APP,
    DOM_PROD_CART = e.target.closest(".cart__product"),
    PROD_CART_ID  = Number(DOM_PROD_CART.dataset.id),
    PROD_CART_I   = CART.findIndex(prod => prod.id === PROD_CART_ID),
    DELETE_PROD   = CART.splice(PROD_CART_I, 1);

    cartList.removeChild(DOM_PROD_CART);
    
    totalItems();
    totalPrice();
    saveLocalStorage("cart", CART);

};

function modifyCount (e) {

    const 
    
    INPUT_COUNT     = e.target,
    DOM_PROD_CART   = e.target.closest(".cart__product"),
    PROD_CART_ID    = Number(DOM_PROD_CART.dataset.id),
    PROD_CART       = CART.find(prod => prod.id === PROD_CART_ID),
    PROD            = DATABASE.find(item => item.id === PROD_CART_ID),
    IS_FLOAT        = parseFloat(INPUT_COUNT.value);

    if (!(Number.isInteger(IS_FLOAT)))
        INPUT_COUNT.value = Math.round(IS_FLOAT);

    if (INPUT_COUNT.value <= 0)
        INPUT_COUNT.value = 1;

    if (
        (Number(INPUT_COUNT.value) === PROD.stock) || 
        (PROD.stock < INPUT_COUNT.value)
    )
        INPUT_COUNT.value = PROD.stock;

    PROD_CART.qty = Number(INPUT_COUNT.value);

    totalItems();
    totalPrice();
    saveLocalStorage("cart", CART);

};

function loadEvent (e) {

    const GET_CART = getItemLocalStorage("cart");

    if (GET_CART) {

        CART.length = 0;
        setCart(GET_CART);
        printCart(CART, e);
        totalItems();
        totalPrice();
        saveLocalStorage("cart", CART);

    };

};

function createInputEvent (e) {

    const 
    
    INPUT_COUNT = e.target.querySelector(".cart__count"),
    DELETE_BTN  = e.target.querySelector(".cart__buttonDelete");

    INPUT_COUNT.addEventListener("change", modifyCount);
    DELETE_BTN.addEventListener("click", deleteProdToCart);

};

function openAndCloseCart () {

    const { cart, cartModal } = DOM_APP;

    cart.classList.toggle("cart--active");
    cartModal.classList.toggle("modalCart--active");

};

function configPropagation (e) {

    e.stopPropagation();

};

export {

    loadEvent,
    createInputEvent,
    openAndCloseCart,
    configPropagation

};