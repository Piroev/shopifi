import { makeAutoObservable } from "mobx";

class ProductsStore {
    products = [
        { id: 1, bar: "0101", category: "Lubricants", name: "ZIC 5W10 1l", price: 1500, balance: 3, supplier: "Autofan"},
        { id: 2, bar: "0102", category: "Brake System", name: "Ferodo LP1178", price: 27000, balance: 6, supplier: "EMEX"},
        { id: 3, bar: "0103", category: "Ignition", name: "NGK LAZER PLATINUM 9688", price: 9300, balance: 18, supplier: "M-Zap"},
    ];

    basket = [];

    allProductsBasket = [];

    count = 1;
    
    constructor() {
        makeAutoObservable(this)
    }

    search(bar) {
        //debugger;
        const item = this.products.filter(product => product.bar === bar);
        
        this.allProductsBasket.push(item[0]);

        if(this.basket.indexOf(item[0]) === -1) {
            
            this.basket.push(item[0]);
            
        }
        
        console.log(this.allProductsBasket)
    }
    
    delete(id) {
        
        this.basket = this.basket.filter( item => item.bar !== id );
    }

    get getAmount () {

    }

    get getTotal() {
        if  (this.basket.length > 0) {
            let sum = this.basket.reduce((a, b) => a.price + b.price);
            
            //console.log(sum);
        }
        return 0;
    }
}


export default new ProductsStore();