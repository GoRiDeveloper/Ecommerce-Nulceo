export function saveLocalStorage (key, data) {

    const NEW_DATA = JSON.stringify(data);
    localStorage.setItem(key, NEW_DATA);

};

export function getItemLocalStorage (key) {

    const 
    
    DATA     = localStorage.getItem(key),
    NEW_DATA = JSON.parse(DATA);

    return NEW_DATA;

};

export function deleteLocalStorage (key) {

    localStorage.removeItem(key);

};