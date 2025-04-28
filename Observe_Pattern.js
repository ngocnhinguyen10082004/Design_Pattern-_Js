// Lớp Subject đại diện cho Blog
class Blog {
    constructor() {
        this.subscribers = [];
    }
    // Phương thức để đăng ký người dùng nhận thông báo
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    // Phương thức để hủy đăng ký người dùng nhận thông báo
    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }
    // Phương thức để thông báo cho tất cả người đăng ký khi có bài viết mới
    notifySubscribers(post) {
        this.subscribers.forEach(subscriber => subscriber.update(post));
    }
    // Phương thức để thêm bài viết mới và thông báo cho người đăng ký
    addPost(post) {
        console.log(`Blog có bài viết mới: ${post}`);
        this.notifySubscribers(post);
    }
}
// Lớp Observer đại diện cho người dùng
class Subscriber {
    constructor(name) {
        this.name = name;
    }
    // Phương thức để nhận thông báo khi có bài viết mới
    update(post) {
        console.log(`${this.name} nhận được thông báo: Bài viết mới - ${post}`);
    }
}
// Tạo đối tượng Blog
const blog = new Blog();
// Tạo đối tượng Subscriber
const subscriber1 = new Subscriber("Người dùng 1");
const subscriber2 = new Subscriber("Người dùng 2");
// Đăng ký người dùng nhận thông báo
blog.subscribe(subscriber1);
blog.subscribe(subscriber2);
// Thêm bài viết mới và thông báo cho người đăng ký
blog.addPost("Bài viết về JavaScript"); 
// Hủy đăng ký người dùng 1
blog.unsubscribe(subscriber1);
// Thêm bài viết mới và thông báo cho người đăng ký
blog.addPost("Bài viết về Observer Pattern"); 
