import { D, DOM_APP } from "../variables.js";

export function generateProdInfo (data) {

    const 
    
    {

        id,
        title,
        image,
        price,
        stock

    } = data,
    { prodInfo } = DOM_APP,
    $h2      = D.createElement("h2"),
    $figure  = D.createElement("figure");

    $h2.className = "prodInfo__heading";
    $h2.innerText = title;

    $figure.className = "prodInfo__info";
    $figure.innerHTML = `
    
        <img class="prodInfo__image" src=${image} alt="product ${id}">
        <figcaption class="prodInfo__desc"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus autem qui numquam eveniet quae fuga voluptates quasi recusandae, aliquam animi sint dolore porro delectus. Fugit dolorem non magni quibusdam excepturi? </figcaption>
        <div class="prodInfo__div">

            <p class="prodInfo__price"> ${price} $ Mxn </p>
            <p class="prodInfo__stock"> Disponible : ${stock} </p>

        </div>
        <button type="button" class="prodInfo__addBtn" data-id="${id}"> Agregar al Carrito </button>

    `;

    prodInfo.appendChild($h2);
    prodInfo.appendChild($figure);

};