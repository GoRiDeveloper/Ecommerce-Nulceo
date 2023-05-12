import { D, DATABASE, DOM_APP } from "../variables.js";
import { ProductCart } from "./Product_Cart.js";
import { generateProdInfo } from "../utils/generate_product_info.js";

function printModalInfo (prod) {

    const 
    
    DATA = {

        id:    prod.id,
        title: prod.title, 
        image: prod.image, 
        price: prod.price, 
        stock: prod.stock

    },
    { prodInfoModal } = DOM_APP;
    
    generateProdInfo(DATA);

    prodInfoModal.classList.add("modalProdInfo--active");

    const PROD_INFO = D.querySelector(".prodInfo");
    PROD_INFO.classList.add("prodInfo--active");

};

function getInfo (id) {

    const PROD = DATABASE.find(item => item.id === id);
    printModalInfo(PROD);

};

export function openAndCloseInfoModal (e) {

    const 
    
    { prodInfoModal, prodInfo } = DOM_APP,
    PROD_INFO  = e.currentTarget,
    TITLE_INFO = prodInfo.querySelector(".prodInfo__heading"),
    FIG_INFO   = prodInfo.querySelector(".prodInfo__info");

    prodInfoModal.classList.toggle("modalProdInfo--active");
    PROD_INFO.classList.toggle("prodInfo--active");

    prodInfo.removeChild(TITLE_INFO);
    prodInfo.removeChild(FIG_INFO);

};

export function ProductInfo (e) {

    const INFO_BTN = e.target.closest(".product__infoBtn");

    if (INFO_BTN) {

        const 
        
        GET_ID = INFO_BTN.dataset.id,
        ID     = Number(GET_ID);

        getInfo(ID);

    };

};

export function createBtnEvents (e) {

    const 

    CLOSE_BTN = e.currentTarget.querySelector(".prodInfo__closeBtn"),
    ADD_BTN   = e.currentTarget.querySelector(".prodInfo__addBtn");

    CLOSE_BTN.addEventListener("click", openAndCloseInfoModal);

    if (ADD_BTN)
        ADD_BTN.addEventListener("click", ProductCart);

};