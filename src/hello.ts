console.log("Hello World");

class Phone{
    constructor(
        public color: string,
        public size: number,
    ){}

    showInfo(): void {
        console.log(`Phones coulr is ${this.color}`);
    }
}

let obj1: Phone = new Phone("black", 5);

obj1.showInfo();