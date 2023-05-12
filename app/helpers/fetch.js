export async function fetchData (url) {

    try {
        
        const 
        
        RES  = await fetch(url),
        DATA = await RES.json();

        return DATA;
        
    } catch (e) {

        console.log(e);
        
    };

};