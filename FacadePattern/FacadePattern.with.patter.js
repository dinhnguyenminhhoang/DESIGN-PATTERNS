class Discount {
    calc(value) {
        return value * 0.9;
    }
}
class Shipping {
    calc() {
        return 5;
    }
}
class Fees {
    calc(value) {
        return value * 1.05;
    }
}
class ShoppeeFacadePattern {
    constructor() {
        this.discount = new Discount();
        this.sipping = new Shipping();
        this.fees = new Fees();
    }
    calc(price) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.sipping.calc(price);
        return price;
    }
}
function buy(price) {
    const shoppe = new ShoppeeFacadePattern();
    console.log(`shoppe:: ${shoppe.calc(price)}`);
}
buy(120000);
