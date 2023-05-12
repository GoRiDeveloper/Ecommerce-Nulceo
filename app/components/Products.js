import { D, DATABASE, GLOBAL, DOM_APP } from "../variables.js";
import { fetchData } from "../helpers/fetch.js";

function printProduct (prod) {

    const 
    
    {

        id,
        stock,
        image,
        price,
        title

    }            = prod,
    { mainGrid } = DOM_APP,
    $article     = D.createElement("article");

    $article.className = "product";
    $article.innerHTML = `
        <div class="product__ilustration">
            <img class="product__image" src=${image} alt="producto ${id}">
        </div>
        <div class="product__content">

            <button type="button" class="product__button" data-id=${id}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="product__icon">
                    <circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle>
                    <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
                    <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
                </svg>
            </button>
            <div class="product__info">
                    
                <div>
                    <p class="product__price"> ${price} $Mxn </p>
                    <p class="product__stock"> Disponibles : ${stock} </p>
                </div>
                <h2 class="product__heading"> ${title} </h2>
                <button type="button" class="product__infoBtn" data-id=${id}> Más Información... </button>

            </div>

        </div>
    `;

    mainGrid.appendChild($article);

};

function printProducts (prods) {

    prods.forEach(prod => {

        const 
        
        RAND_NUM  = Math.floor(Math.random()*25) + 1,
        STOCK     = parseInt(RAND_NUM);

        prod.stock = STOCK;

        DATABASE.push(prod);

        printProduct(prod);

    });

};

async function getProducts (limit) {

    const 
    
    { urlApi } = GLOBAL,
    DATA       = await fetchData(`${urlApi}${limit}`);

    return DATA;

};

export async function Products () {

    const { mainGrid } = DOM_APP;

    if (mainGrid.children.length < 1) {

        const PRODUCTS = await getProducts(8);
        //const PRODUCTS = LOCAL_DB;
        
        printProducts(PRODUCTS);

    };

};