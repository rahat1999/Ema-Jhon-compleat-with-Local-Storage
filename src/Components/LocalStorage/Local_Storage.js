// db means database
const addToDb = item => {
    const db = getDb()
    if (item in db) {
        db[item] = db[item] + 1
    }
    else {
        db[item] = 1
    }
    saveLocalStorage(db);
}
//set data local storage
const saveLocalStorage = db => {
    const dbJson = JSON.stringify(db);
    localStorage.setItem('shopping-cart', dbJson);
}

//get data from local storage
const getDb = () => {
    let getFromLocalStorage = localStorage.getItem('shopping-cart');

    // if (getFromLocalStorage) {
    //     getFromLocalStorage = JSON.parse(getFromLocalStorage);
    // } else {
    //     getFromLocalStorage = {};
    // }

    // return getFromLocalStorage;
    return getFromLocalStorage ? JSON.parse(getFromLocalStorage) : {}

}

//remove data from storage
const removeDataFromDb = (item) => {
    const db = getDb()
    delete db[item];
}
export { addToDb, removeDataFromDb, getDb }