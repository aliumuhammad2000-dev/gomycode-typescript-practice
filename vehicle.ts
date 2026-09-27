
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of Car
const myCar = new Car("Toyota", "Camry", 2024);

// Call the start method
myCar.start();
