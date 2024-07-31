// 1. class movie to hold the requirements given

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.defaultRating = "PG-13";
        this.rating = (rating !== undefined) ? rating : this.defaultRating;// "PG" as default when no rating is provided.
    }
    getPG() {
        return ` Movie  : ${this.title}\n Studio : ${this.studio}\n Rating : ${this.rating}`
    }
}
let movie1 = new Movie("Casino Royale", "Eon Productions","PG-13");
console.log(movie1.getPG());


// 2. class circle - convert uml to typescript class

class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return `Radius: ${this.radius}`;
    }
  
    set changeRadius(newRadius) {
      this.radius = newRadius;
    }
  
    getColor() {
      return `Color: ${this.color}`;
    }
  
    set changeColor(newColor) {
      this.color = newColor;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);  //pi*r*r
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;  //2*pi*r
    }
  }
  
  let circle = new Circle(1.0, "red"); 
  circle.changeRadius = 3.0; //change radius
  circle.changeColor = "pink"; //change color
  console.log(circle.getRadius());//get ragius
  console.log(circle.getColor());//get color
  console.log(circle.getArea().toFixed(2)); // get area
  console.log(circle.getCircumference().toFixed(2)); // get circumference

// 3. write a person class to hold all the details

class Person {
    constructor(name,age,gender,maritalStatus) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }
}

const obj = new Person("Viji", 31, "Female", "Married");
console.log(obj.name, obj.age, obj.gender, obj.maritalStatus, "'Thanks'");

// 4. write a class to calculate the uber price.

class Uber {
    constructor(km) {
        this.km = km;
        this._price = 25;
    }
    get price() {
        return this.km * this._price;
    }
}

const cus = new Uber(4);
console.log(cus.price);
const cus1 = new Uber(10);
console.log(cus1.price);