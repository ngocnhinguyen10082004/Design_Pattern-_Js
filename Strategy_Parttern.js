// Interface cho các chiến lược di chuyển
class MoveStrategy {
    move() {
        throw new Error("Phương thức move() phải được cài đặt");
    }
}

// Các lớp cụ thể cho từng chiến lược di chuyển
class WalkStrategy extends MoveStrategy {
    move() {
        console.log("Nhân vật đang đi bộ");
    }
}

class RunStrategy extends MoveStrategy {
    move() {
        console.log("Nhân vật đang chạy");
    }
}

class FlyStrategy extends MoveStrategy {
    move() {
        console.log("Nhân vật đang bay");
    }
}

// Lớp Character sử dụng chiến lược di chuyển
class Character {
    constructor(moveStrategy) {
        this.moveStrategy = moveStrategy;
    }

    setMoveStrategy(moveStrategy) {
        this.moveStrategy = moveStrategy;
    }

    move() {
        this.moveStrategy.move();
    }
}
// Khởi tạo nhân vật với chiến lược di chuyển ban đầu là đi bộ
const character = new Character(new WalkStrategy());
character.move(); // Nhân vật đang đi bộ
// Thay đổi chiến lược di chuyển sang chạy
character.setMoveStrategy(new RunStrategy());
character.move(); // Nhân vật đang chạy
// Thay đổi chiến lược di chuyển sang bay
character.setMoveStrategy(new FlyStrategy());
character.move();
