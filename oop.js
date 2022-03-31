"use strict";
/*
    Object Oriented Programming -- OOP
        This is a collection of practises and principles that considers data,
        or objects, as models and offer abstractions and encapsulations to those models.

        Interfaces:
            These are contracts specified by a 'creator' that must be satisfied
            by a 'consumer'. They are used to specify the stucture of objects
            without creating the objects.
            Syntax:
                interface <identifier>{ <delcarations> }
*/
// interface IStudent{
//     name: string;
//     age: number;
//     isEnrolled: boolean;
// }
// function setStudentInfo(student: IStudent){
//     student.name = 'Jane Doe';
//     student.age = 18;
//     student.isEnrolled = true;
// }
// let student = {
//     name: '',
//     age: 0,
//     isEnrolled: false,
//     'class': 'Basic 16'
// };
// setStudentInfo(student);
// interface IHouse{
//     getNumberOfRooms(): number;
//     getNumberOfBeds(): number;
//     addBed(roomNumber: number): void;
//     removeBed(roomNumber: number): void;
// }
// function consumeHouse(house: IHouse){
//     window.alert(house.getNumberOfRooms());
//     window.alert(house.getNumberOfBeds());
//     house.addBed(1);// Add a bed to the first room in the house
//     house.addBed(1);// Add another bed to the first room in the house
//     house.addBed(4);// Add a bed to the fourth room in the house
//     window.alert(house.getNumberOfBeds());// Number of beds to be incremented by 3
//     house.removeBed(3);// Remove a bed from the third room in the house
//     window.alert(house.getNumberOfBeds());// Number of beds to be decremented by 1
// }
// let house = {
//     rooms: [2, 0, 4, 3, 1, 0, 0],// The house has 7 rooms with each number of beds
//     getNumberOfRooms(){
//         return this.rooms.length;// 'this' is the current object we are inside
//     },
//     getNumberOfBeds(){
//         let sum = 0;
//         for (let index = 0; index < this.rooms.length; index = (index + 1)){
//             sum = (sum + this.rooms[index]);
//         }
//         return sum;
//     },
//     addBed(roomNumber: number){
//         /*
//             HINT: Room number is '1' based while index is '0' based.
//             i.e. We subtract 1 from the room number and use as our index
//         */
//         let index = (roomNumber - 1);
//         this.rooms[index] = (this.rooms[index] + 1);
//     },
//     removeBed(roomNumber: number){
//         let index = (roomNumber - 1);
//         if (this.rooms[index] != 0){
//             this.rooms[index] = (this.rooms[index] - 1);
//         }
//     }
// };
// consumeHouse(house);
// interface IPupil{
//     getName(): string;
//     getAge(): number;
//     getClass(): string;
//     isEnrolled(): boolean;
//     setGrade(grade: number): void;
//     getGPA(): string;// A, B, C, e.t.c.
// }
/*
    Assignment:
        Using the interface above, define an object that implements
        the methods in it.
        HINT: GPA should be values within ranges e.g. 91 to 100 as A+, etc
*/
// function consumePupil(pupil: IPupil){
//     window.alert(pupil.getName());
//     window.alert(pupil.getAge());
//     window.alert(pupil.getClass());
//     window.alert(pupil.isEnrolled());
//     pupil.setGrade(81);
//     window.alert(pupil.getGPA());
// }
// let pupil = {
//     name: 'Williams Peterside',
//     age: 36,
//     class: 'MaY 2',
//     isEnrolledStatus: true,
//     grade: 0,
//     getName(){
//         return this.name;
//     },
//     getAge(){
//         return this.age;
//     },
//     getClass(){
//         return this.class;
//     },
//     isEnrolled(){
//         return this.isEnrolledStatus;
//     },
//     setGrade(grade: number){
//         this.grade = grade;
//     },
//     getGPA(){
//         if (this.grade > 90){
//             return 'A+';
//         }
//         else if (this.grade > 85){
//             return 'A-';
//         }
//         else if (this.grade > 80){
//             return 'B+';
//         }
//         else if (this.grade > 65){
//             return 'C';
//         }
//         else if (this.grade > 49){
//             return 'D';
//         }
//         else if (this.grade > 39){
//             return 'E';
//         }
//         else{
//             return 'F';
//         }
//     }
// }
// consumePupil(pupil);
/*
    Classes:
        These are opaque structures/objects with public contracts.
        They encapsulate data and provide methods for access and manipulation.
        Syntax:
            class <identifier>{ <definitions> }

        There are three (3) levels of access in a class:
            Public: Available to everyone
            Protected: Available to the class and its descendants
            Private: Available to the class only
*/
// interface IHouse{
//     getNumberOfRooms(): number;
//     getNumberOfBeds(): number;
//     addBed(roomNumber: number): void;
//     removeBed(roomNumber: number): void;
// }
// function consumeHouse(house: IHouse){
//     window.alert(house.getNumberOfRooms());
//     window.alert(house.getNumberOfBeds());
//     house.addBed(1);// Add a bed to the first room in the house
//     house.addBed(1);// Add another bed to the first room in the house
//     house.addBed(4);// Add a bed to the fourth room in the house
//     window.alert(house.getNumberOfBeds());// Number of beds to be incremented by 3
//     house.removeBed(3);// Remove a bed from the third room in the house
//     window.alert(house.getNumberOfBeds());// Number of beds to be decremented by 1
// }
/*
    The 'implements' keyword lets us define a class that will comply or
    implement every required property of an interface
*/
// class House implements IHouse{
//     private rooms_ = [2, 0, 4, 3, 1, 0, 0];
//     public getNumberOfRooms(){
//         return this.rooms_.length;
//     }
//     public getNumberOfBeds(){
//         let sum = 0;
//         for (let index = 0; index < this.rooms_.length; index = (index + 1)){
//             sum = (sum + this.rooms_[index]);
//         }
//         return sum;
//     }
//     public addBed(roomNumber: number){
//         /*
//             HINT: Room number is '1' based while index is '0' based.
//             i.e. We subtract 1 from the room number and use as our index
//         */
//         let index = (roomNumber - 1);
//         this.rooms_[index] = (this.rooms_[index] + 1);
//     }
//     public removeBed(roomNumber: number){
//         let index = (roomNumber - 1);
//         if (this.rooms_[index] != 0){
//             this.rooms_[index] = (this.rooms_[index] - 1);
//         }
//     }
// }
// let house = new House;
// consumeHouse(house);
// interface IName{
//     setFull(value: string): void;
//     getFull(): string;
//     getParts(): Array<string>;
//     setFirst(value: string): void;
//     getFirst(): string;
//     setLast(value: string): void;
//     getLast(): string;
// }
// function consumeName(name: IName){
//     name.setFull('Jason Peters');
//     window.alert(name.getFull());// Jason Peters
//     window.alert(name.getParts());// [Jason, Peters]
//     window.alert(name.getFirst());// Jason
//     window.alert(name.getLast());// Peters
//     name.setFirst('Michael');
//     window.alert(name.getFull());// Michael Peters
//     window.alert(name.getParts());// [Michael, Peters]
//     window.alert(name.getFirst());// Michael
//     window.alert(name.getLast());// Peters
//     name.setLast('Price');
//     window.alert(name.getFull());// Michael Price
//     window.alert(name.getParts());// [Michael, Price]
//     window.alert(name.getFirst());// Michael
//     window.alert(name.getLast());// Price
// }
// class Name implements IName{
//     private first_ = '';
//     private last_ = '';
//     public setFull(value: string){
//         let parts = value.split(' ');// Split the full name by the space character
//         //E.g. 'John Doe' => ['John', 'Doe']
//         this.first_ = parts[0];
//         this.last_ = parts[1];
//     }
//     public getFull(){
//         return (this.first_ + ' ' + this.last_);
//     }
//     public getParts(){
//         return [this.first_, this.last_];
//     }
//     public setFirst(value: string){
//         this.first_ = value;
//     }
//     public getFirst(){
//         return this.first_;
//     }
//     public setLast(value: string){
//         this.last_ = value;
//     }
//     public getLast(){
//         return this.last_;
//     }
// }
// consumeName(new Name);
/*
    Classwork:
        Using the interface below, define a class that implements the interface
*/
// interface IName{
//     setFull(value: string): void;
//     getFull(): string;
//     getParts(): Array<string>;
//     setFirst(value: string): void;
//     getFirst(): string;
//     setMiddle(value: string): void;
//     getMiddle(): string;
//     setLast(value: string): void;
//     getLast(): string;
// }
/*
    Inheritance:
        This is a hierarchical structuring of classes and how they relate to one another.
        A 'child' class can inherit properties from a 'parent' or 'base' class.
        E.g. A dog and a cat are both animals
*/
// class Animal{
//     public getType(){
//         return 'Unknown animal';
//     }
//     public getNumberOfEyes(){
//         return 2;
//     }
//     public getNumberOfLimbs(){
//         return 4;
//     }
//     public move(){
//         window.alert(this.getType() + ' has moved!');
//     }
// }
// function consumeAnimal(animal: Animal){
//     window.alert(animal.getType());
//     window.alert(animal.getNumberOfEyes());
//     window.alert(animal.getNumberOfLimbs());
//     animal.move();
// }
// class Dog extends Animal{
//     public getType(){
//         return 'Dog';
//     }
//     public bark(){
//         window.alert('Dog is barking...');
//     }
// }
// class Cat extends Animal{
//     public getType(){
//         return 'Cat';
//     }
//     public purr(){
//         window.alert('Cat is purring...');
//     }
// }
// class Chicken extends Animal{
//     public getType(){
//         return 'Chicken';
//     }
//     public getNumberOfLimbs(){
//         return 2;
//     }
//     public cluck(){
//         window.alert('Chicken is clucking...');
//     }
// }
// let dog = new Dog;
// window.alert(dog.getNumberOfEyes());
// window.alert(dog.getNumberOfLimbs());
// dog.move();
// dog.bark();
// let cat = new Cat;
// window.alert(cat.getNumberOfEyes());
// window.alert(cat.getNumberOfLimbs());
// cat.move();
// cat.purr();
// consumeAnimal(new Dog);
// consumeAnimal(new Cat);
// consumeAnimal(new Chicken);
/*
    Assignment:
        In the base class 'Animal' define a 'doSpecialAction' method that does nothing
        In each child class, override the method to perform the applicable action
        Call the method in the 'consumeAnimal' function
*/
