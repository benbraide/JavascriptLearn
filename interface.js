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
