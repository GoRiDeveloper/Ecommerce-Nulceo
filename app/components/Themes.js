import { DOM_APP } from "../variables.js";

export function nightAndLightMode () {

    const { body, nightModeBtn, lightModeBtn } = DOM_APP;

    nightModeBtn.classList.toggle("hidden");
    lightModeBtn.classList.toggle("hidden");

    if (nightModeBtn.classList.contains("hidden"))
        body.classList.toggle("theme--dark");
    else
        body.classList.toggle("theme--dark");

};