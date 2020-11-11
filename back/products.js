//#region requires

//#endregion requires

//#region variables

//#endregion variables

//#region functions

//#endregion functions

//#region MAIN

//#region OldJS

// const products = [
//     {id: 1, name: "name Products", quantity: 6, img: "https://monImage", date:"31/10/2020", ship: false, categorie: "fruit&legume", price: 10}
// ];

// function Product(){

// }

// function getProduct(){

// }

// function saveProduct(){

// }

// function updateProduct(){

// }

// function deleteProduct(){

// }

// Product.prototype.getProduct = getProduct;
// Product.prototype.saveProduct = saveProduct;

// module.exports = new Product();

//#endregion OldJS

//#region NewJS

class Product {
    constructor(){
        this.products = [
           {id: 1, name: "name Products", quantity: 6, img: "https://monImage", date:"31/10/2020", ship: false, categorie: "fruit&legume", price: 10}
        ];
    }

    get getProduct(){
        return this.products;
    }

    saveProduct(){}
    updateProduct(){}
    deleteProduct(){}
}

module.exports = new Product();

//#endregion NewJS

//#endregion MAIN


