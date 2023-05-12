import { DOM_APP } from "../variables.js";

export function showMenu () {

    const { navBar, columnMenu, rowMenu } = DOM_APP;

    rowMenu.classList.add("rotate-rowDots");

    setTimeout(() => {

        rowMenu.classList.add("hidden");
        navBar.classList.add("show-menu");

        if (columnMenu.classList.contains("hidden")) 
            columnMenu.classList.toggle("hidden");

        if (rowMenu.classList.contains("rotate-rowDots"))
            rowMenu.classList.toggle("rotate-rowDots");

        if (navBar.classList.contains("hidden"))
            navBar.classList.toggle("hidden");

    }, 240);

};

export function hideMenu () {

    const { navBar, columnMenu, rowMenu } = DOM_APP;

    navBar.classList.add("hide-menu");
    columnMenu.classList.add("rotate-columnDots");

    setTimeout(() => {

        columnMenu.classList.add("hidden");
        navBar.classList.add("hidden");

        if (rowMenu.classList.contains("hidden")) 
            rowMenu.classList.toggle("hidden");    

        if (navBar.classList.contains("show-menu"))
            navBar.classList.toggle("show-menu");

        if (navBar.classList.contains("hide-menu"))
            navBar.classList.toggle("hide-menu");

        if (columnMenu.classList.contains("rotate-columnDots"))
            columnMenu.classList.toggle("rotate-columnDots");

    }, 240);

};