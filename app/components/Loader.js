import { DOM_APP } from "../variables.js";

export function activeLoader () {

    const { loader, loaderModal } = DOM_APP;
    
    loaderModal.classList.toggle("modalLoader--active");
    loader.classList.toggle("loader--active");

};