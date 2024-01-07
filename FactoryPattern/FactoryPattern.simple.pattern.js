const serviceLogistics = (cargoVolume) => {
    // Lv0;
    switch (cargoVolume) {
        case "10":
            return {
                name: "Truck 10",
                doors: 6,
                price: "100.000 VND",
            };
        case "20":
            return {
                name: "Truck 20",
                doors: 16,
                price: "1.000.000 VND",
            };
        default:
            break;
    }
};
console.log("lecel 0::::", serviceLogistics("20"));

//use simple pattern
class ServiceLogistics {
    constructor(doors = 6, price = "100.000 VND", name = "Truck 10") {
        this.doors = doors;
        this.price = price;
        this.name = name;
    }
    static getTransport = (cargoVolume) => {
        switch (cargoVolume) {
            case "10":
                return new ServiceLogistics();
            case "20":
                return new ServiceLogistics(16, "1.000.000 VND", "Truct 16");
            default:
                break;
        }
    };
}
console.log("lecel xxxx::::", ServiceLogistics.getTransport("10"));
