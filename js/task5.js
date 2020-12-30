class Car {

      static getSpecs(car) {
      console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);
    }
    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
      this.speed = speed;
      this._price = price;
      this.maxSpeed = maxSpeed;
      this.isOn = isOn;
      this.distance = distance;
    }
  
     
          set price(value) {
          this._price = value;
      }
           get price() {
          return this._price;
      }
  
     turnOn() {
          this.isOn = true;
      }
  
     turnOff() {
          this.speed = 0;
          this.isOn = false;
      }
  
     accelerate(value) {
          const resultSpeed = this.speed + value;
          if (resultSpeed > this.maxSpeed) return;
          this.speed = resultSpeed;
      }
  
     decelerate(value) {
      const resultSpeed = this.speed - value;
          if (resultSpeed < 0) return;
          this.speed = resultSpeed;
    }
  
      drive(hours) {
          if (this.isOn) {
              this.distance += this.speed * hours;
          }
      }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000