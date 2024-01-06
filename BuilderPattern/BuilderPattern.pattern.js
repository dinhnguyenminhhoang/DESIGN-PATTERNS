// Builder
class ProductBuilder {
    constructor(name) {
        this.name = name;
        this.price = 0;
        this.category = "uncategorized";
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setCategory(category) {
        this.category = category;
        return this;
    }

    build() {
        return new Product(this);
    }
}

// Product
class Product {
    constructor(builder) {
        this.name = builder.name;
        this.price = builder.price;
        this.category = builder.category;
    }

    getInfo() {
        return `${this.name} - Category: ${this.category}, Price: $${this.price}`;
    }
}

// Usage
const product1 = new ProductBuilder("Laptop")
    .setPrice(1000)
    .setCategory("Electronics")
    .build();
const product2 = new ProductBuilder("Book").setPrice(20).build();

console.log(product1.getInfo());
console.log(product2.getInfo());
