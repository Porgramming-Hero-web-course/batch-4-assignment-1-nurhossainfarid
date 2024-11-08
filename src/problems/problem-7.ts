{
  /**
    * Problem-7: Create a TypeScript class Car with properties make, model, and year. Include a 
      method getCarAge that returns the car's age based on the current year.
  */

  // Class Car
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    // getCarAge
    getCarAge():string {
      const currentYear: number = new Date().getFullYear();
      const carAge: number = currentYear - this.year;
      return `${carAge} (assuming current year is 2024)`;
    }
  }
                                  
  // Sample input
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge()); // 6 (assuming current year is 2024)
}
