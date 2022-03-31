"use strict";
/*
    Inheritance:
        This is a hierarchical structuring of classes and how they relate to one another.
        A 'child' class can inherit properties from a 'parent' or 'base' class.
        E.g. A dog and a cat are both animals
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getType = function () {
        return 'Unknown animal';
    };
    Animal.prototype.getNumberOfEyes = function () {
        return 2;
    };
    Animal.prototype.getNumberOfLimbs = function () {
        return 4;
    };
    Animal.prototype.move = function () {
        window.alert(this.getType() + ' has moved!');
    };
    Animal.prototype.doSpecialAction = function () {
        window.alert('Undefined special action!');
    };
    return Animal;
}());
function consumeAnimal(animal) {
    window.alert(animal.getType());
    window.alert(animal.getNumberOfEyes());
    window.alert(animal.getNumberOfLimbs());
    animal.move();
    animal.doSpecialAction();
}
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.getType = function () {
        return 'Dog';
    };
    Dog.prototype.bark = function () {
        window.alert('Dog is barking...');
    };
    Dog.prototype.doSpecialAction = function () {
        this.bark();
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.getType = function () {
        return 'Cat';
    };
    Cat.prototype.purr = function () {
        window.alert('Cat is purring...');
    };
    Cat.prototype.doSpecialAction = function () {
        this.purr();
    };
    return Cat;
}(Animal));
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chicken.prototype.getType = function () {
        return 'Chicken';
    };
    Chicken.prototype.getNumberOfLimbs = function () {
        return 2;
    };
    Chicken.prototype.cluck = function () {
        window.alert('Chicken is clucking...');
    };
    Chicken.prototype.doSpecialAction = function () {
        this.cluck();
    };
    return Chicken;
}(Animal));
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
consumeAnimal(new Dog);
consumeAnimal(new Cat);
consumeAnimal(new Chicken);
/*
    Assignment:
        In the base class 'Animal' define a 'doSpecialAction' method that does nothing
        In each child class, override the method to perform the applicable action
        Call the method in the 'consumeAnimal' function
*/ 
