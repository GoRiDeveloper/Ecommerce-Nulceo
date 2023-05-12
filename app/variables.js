export const 

    D        = document,
    DATABASE = [],
    CART     = [],

    GLOBAL = Object.freeze({

        urlLocal: "./app/assets/data/products.json",
        urlApi: "https://fakestoreapi.com/products?limit="

    }),

    DOM_APP = Object.freeze({

        body: D.querySelector(".theme"),
        loader: D.querySelector(".loader"),
        loaderModal: D.querySelector(".modalLoader"),
        navBar: D.querySelector(".nav"),
        columnMenu: D.querySelector(".header__icon--verticalDots"),
        rowMenu: D.querySelector(".header__icon--rowDots"),
        cartModal: D.querySelector(".modalCart"),
        cart: D.querySelector(".cart"),
        cartList: D.querySelector(".cart__products"),
        cartButton: D.querySelector(".header__icon--shoppingCart"),
        closeCartButton: D.querySelector(".cart__buttonCloseCart"),
        mainGrid: D.querySelector(".main__grid"),
        prodInfoModal: D.querySelector(".modalProdInfo"),
        prodInfo: D.querySelector(".prodInfo"),
        notifyQtyCart: D.querySelector(".header__notify"),
        cartTotalPrice: D.querySelector(".cart__totalPrice--price"),
        nightModeBtn: D.querySelector(".header__icon--nightMode"),
        lightModeBtn: D.querySelector(".header__icon--lightMode")

    });