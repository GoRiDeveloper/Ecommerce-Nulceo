import { D } from "../variables.js";

export function generateProdCart (data) {

    const 
    
    {

        id,
        image,
        title,
        price,
        qty,
        stock

    }        = data,
    $article = D.createElement("article");

    $article.className = "cart__product";
    $article.dataset.id = id;
    $article.innerHTML = `
    
        <img class="cart__image" src=${image} alt="producto ${id}">
        <div class="cart__info">

            <p class="cart__desc"> ${title} </p>
            <p class="cart__price"> Precio : ${price} $Mxn </p>

        </div>
        <input type="number" class="cart__count" value="${qty}" max="${stock}"> 
        <button type="button" class="cart__buttonDelete">

            <svg xmlns="http://www.w3.org/2000/svg" class="cart__icon" viewBox="0 0 24 24">
                <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
            </svg>

        </button>

    `;

    return $article;

};