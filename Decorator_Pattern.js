// Lớp cơ bản Cake
class Cake {
    constructor() {
        this.description = "Bánh ngọt cơ bản";
        this.cost = 5; // Giá cơ bản của bánh ngọt
    }

    getDescription() {
        return this.description;
    }

    getCost() {
        return this.cost;
    }
}

// Lớp Decorator cơ bản
class CakeDecorator {
    constructor(cake) {
        this.cake = cake;
    }

    getDescription() {
        return this.cake.getDescription();
    }

    getCost() {
        return this.cake.getCost();
    }
}

// Lớp cụ thể cho thành phần Kem
class CreamDecorator extends CakeDecorator {
    constructor(cake) {
        super(cake);
    }

    getDescription() {
        return `${this.cake.getDescription()}, Kem`;
    }

    getCost() {
        return this.cake.getCost() + 2; 
    }
}

// Lớp cụ thể cho thành phần Trái cây
class FruitDecorator extends CakeDecorator {
    constructor(cake) {
        super(cake);
    }

    getDescription() {
        return `${this.cake.getDescription()}, Trái cây`;
    }

    getCost() {
        return this.cake.getCost() + 3; 
    }
}

// Lớp cụ thể cho thành phần Sô cô la
class ChocolateDecorator extends CakeDecorator {
    constructor(cake) {
        super(cake);
    }

    getDescription() {
        return `${this.cake.getDescription()}, Sô cô la`;
    }

    getCost() {
        return this.cake.getCost() + 4; 
    }
}

// Tạo bánh ngọt cơ bản
let cake = new Cake();
console.log(cake.getDescription()); 
console.log(`Giá: ${cake.getCost()} USD`); 

// Thêm kem vào bánh ngọt
cake = new CreamDecorator(cake);
console.log(cake.getDescription()); 
console.log(`Giá: ${cake.getCost()} USD`); 

// Thêm trái cây vào bánh ngọt
cake = new FruitDecorator(cake);
console.log(cake.getDescription()); 
console.log(`Giá: ${cake.getCost()} USD`); 

// Thêm sô cô la vào bánh ngọt
cake = new ChocolateDecorator(cake);
console.log(cake.getDescription()); 
console.log(`Giá: ${cake.getCost()} USD`); 
