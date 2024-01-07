class Car {
    constructor(
        customers = {},
        name = "For Ranger 2023",
        doors = 4,
        price = "10k USD"
    ) {
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customers;
    }
}
class ServiceLogistics {
    transportClass = Car;
    getTransport = (customerInfo) => {
        return new this.transportClass(customerInfo);
    };
}
//order
const carService = new ServiceLogistics();
console.log(
    "carService",
    carService.getTransport({
        customerInfo: { nanme: "ABCD", cargoVolume: "100kg" },
    })
);
// use
class Truct {
    constructor(
        customers = {},
        name = "Fcontainer 2023",
        doors = 4,
        price = "10k USD"
    ) {
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfo = customers;
    }
}
//Cách 1
carService.transportClass = Truct;
console.log(
    "TRUCT",
    carService.getTransport({
        customerInfo: { nanme: "ABCDdsadas", cargoVolume: "100kg" },
    })
);
//Cách 2
class TruckService extends ServiceLogistics {
    transportClass = Truct;
}
const truckService = new TruckService();
console.log(
    "TruckService",
    truckService.getTransport({
        customerInfo: { nanme: "ABCDdsadas", cargoVolume: "100kg" },
    })
);
