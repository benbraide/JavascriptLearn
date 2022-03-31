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