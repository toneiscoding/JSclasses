// Submit a JS file. 

// Part I
// For each example create 3 objects that are from the extending class (the one with more properties)

// 1. Create a class called Animal that has a name property and a speak method. Then, create a class called Dog that extends Animal and has an additional breed property and a bark method.
class Animal {
    constructor(name) {
        this.name = name;
        
    }
 
    speak() {   
        console.log('This animal knows how to speak!');

    }
}
class Dog extends Animal{
    constructor(name, breed) {
        super(name)
        this.breed = breed;
    }
    
    bark() {
        console.log("Arf Arf")
    }
}    

let moco = new Dog('moco', 'pug')
let drax = new Dog( 'drax', 'lucario')
let bruno = new Dog('bruno','husky')

console.log(drax)


// 2. Create a class called Shape that has a name property and a calculateArea method. Then, create a class called Circle that extends Shape and has an additional radius property and overrides the calculateArea method to calculate the area of a circle.
class Shape {
    constructor(name) {
      this.name = name;
    }
    
    calculateArea() {
      console.log('This method should be overridden in the child class!');
    }
  }
  
  class Circle extends Shape {
    constructor(name, radius) {
      super(name);
      this.radius = radius;
    }
    
    calculateArea() {
      const area = Math.PI * Math.pow(this.radius, 2);
      console.log(`The area of the circle is ${area}.`);
    }
  }

  let myCircle = new Circle('myCircle', 8);
  let myCircle2 = new Circle('myCircle2', 11);
  let myCircle3 = new Circle('myCircle3', 15);

  myCircle.calculateArea()
  myCircle2.calculateArea()
  myCircle3.calculateArea()
  
// 3. Create a class called Vehicle that has a make and model property and a drive method. Then, create a class called Car that extends Vehicle and has an additional numWheels property and a honk method.
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        
    }
 
    drive() {   
        console.log('This vehicle has driving capabilities');

    }
}
class Car extends Vehicle{
    constructor(make, model, numWheels) {
        super(make, model)
        this.numWheels = numWheels;
    }
    
    Honk() {
        console.log("Honk Honk")
    }
}    

let car1 = new Car('Rolls Royce', 'Phantom')
let car2 = new Car( 'Bentley', 'Continental GT')
let car3 = new Car('Lamborghini', 'Aventador')

car1.Honk
car2.Honk
car3.Honk


console.log(car1)
console.log(car2)
console.log(car3)


// 4. Create a class called Person that has a name and age property and a greet method. Then, create a class called Student that extends Person and has an additional major property and overrides the greet method to include their major.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        
        
    }
 
    greet() {   
        console.log(`Hello, my name is ${this.name} and my major is ${this.major}`);

    }
}
class Student extends Person{
    constructor(name, age, major) {
        super(name, age)
        this.major = major;
    }
}    

let student1 = new Student('John', 18, "biology")
let student2 = new Student( 'Mykel', 20, "construction management")
let student3 = new Student('Alex', 19, "pyshchology")

student1.greet()
student2.greet()
student3.greet()


console.log(student1)
console.log(student2)
console.log(student3)


 

// Part II


// 1. Create a factory class called "School" that creates and adds objects from the "Course" class.
class Course {
    constructor(name, NOstudents) {
        this.name = name;
        this.NOstudents = NOstudents;
    }
    logExperience() {
        console.log(this.name)
    }
}

class School {
    constructor(name, NOstudents){
        this.name = name;
        this.NOstudents = NOstudents;
        this.teachers = [];
    }
    addTeacher(name, NOstudents){
        let newTeacher = new Course(name, NOstudents)
        this.teachers.push(newTeacher);
    }
}

let seattleHigh = new School('Seattle High', 0)

seattleHigh.addTeacher('Chase', 20)



// 2. Create a factory class called "Portfolio" that creates and adds objects from the "Project" class.
// 3. Create a factory class called "Company" that creates and adds objects from the "Employee" class.
class Employee {
    constructor(name,experience) {
        this.name = name;
        this.experience = experience;
    }
    logExperience() {
        console.log(this.experience)
    }
}

class Company {
    constructor(name, numberOfEmployees){
        this.name = name;
        this.numberOfEmployees = numberOfEmployees;
        this.employees = [];
    }
    addEmployee(name, experience){
        let newEmployee = new Employee(name, experience)
        this.employees.push(newEmployee);
    }
}

let tonysCompany = new Company('Tony Pizza', 0)
tonysCompany.addEmployee('Chase', 20)




