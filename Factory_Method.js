// Lớp Beverage với thuộc tính name và phương thức display
class Beverage {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Đồ uống: ${this.name}`);
    }
}
// Lớp cơ sở BeverageCreator với phương thức createBeverage
class BeverageCreator {
    createBeverage() {
        const beverage = this.factoryMethod();
        beverage.display();
    }
    // Phương thức factoryMethod sẽ được cài đặt bởi các lớp con
    factoryMethod() {
        throw new Error("Phương thức factoryMethod phải được cài đặt bởi lớp con");
    }
}
// Lớp CoffeeCreator kế thừa từ BeverageCreator
class CoffeeCreator extends BeverageCreator {
    factoryMethod() {
        return new Beverage("Cà phê");
    }
}
// Lớp TeaCreator kế thừa từ BeverageCreator
class TeaCreator extends BeverageCreator {
    factoryMethod() {
        return new Beverage("Trà");
    }
}
// Tạo đối tượng CoffeeCreator và TeaCreator
const coffeeCreator = new CoffeeCreator();
const teaCreator = new TeaCreator();
// Gọi phương thức createBeverage để hiển thị tên đồ uống
coffeeCreator.createBeverage(); 
teaCreator.createBeverage();   
