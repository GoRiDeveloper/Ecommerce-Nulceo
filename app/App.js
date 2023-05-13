import { DOM_APP } from "./variables.js";
import { Products } from "./components/Products.js";
import { showMenu, hideMenu } from "./components/Menu.js";
import { ProductCart } from "./components/Product_Cart.js";
import { activeLoader } from "./components/Loader.js";
import { nightAndLightMode } from "./components/Themes.js";
import { 
    
    ProductInfo, 
    createBtnEvents, 
    openAndCloseInfoModal 

} from "./components/Product_Info.js";
import { 

    openAndCloseCart, 
    configPropagation, 
    createInputEvent,
    loadEvent,
    buyAllItems

} from "./components/Cart.js";

export function generateDOMElements () {

    activeLoader();
    
    Products()
        .then(() => {

            activeLoader();
            loadEvent();

        })
        .catch(() => 

            new Error("No se pudo cargar el contenido.")
                
        );

};

export function generateEvents () {

    const 
    
    {

        rowMenu,
        columnMenu,
        cart,
        cartButton,
        closeCartButton,
        cartModal,
        mainGrid,
        prodInfoModal,
        prodInfo,
        cartList,
        nightModeBtn,
        lightModeBtn,
        buyAll

    } = DOM_APP;

    rowMenu.addEventListener("click", showMenu);
    columnMenu.addEventListener("click", hideMenu);
    cart.addEventListener("click", configPropagation);
    cartButton.addEventListener("click", openAndCloseCart);
    cartModal.addEventListener("click", openAndCloseCart);
    closeCartButton.addEventListener("click", openAndCloseCart);
    mainGrid.addEventListener("click", ProductCart);
    mainGrid.addEventListener("click", ProductInfo);
    prodInfoModal.addEventListener("click", openAndCloseInfoModal);
    prodInfo.addEventListener("click", configPropagation);
    prodInfo.addEventListener("DOMNodeInserted", createBtnEvents);
    cartList.addEventListener("DOMNodeInserted", createInputEvent);
    nightModeBtn.addEventListener("click", nightAndLightMode);
    lightModeBtn.addEventListener("click", nightAndLightMode);
    buyAll.addEventListener("click", buyAllItems);

};