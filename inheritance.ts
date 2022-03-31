/*
    Inheritance:
        This is a hierarchical structuring of classes and how they relate to one another.
        A 'child' class can inherit properties from a 'parent' or 'base' class.
        E.g. A dog and a cat are both animals
*/

class Animal{
    public getType(){
        return 'Unknown animal';
    }

    public getNumberOfEyes(){
        return 2;
    }

    public getNumberOfLimbs(){
        return 4;
    }

    public move(){
        window.alert(this.getType() + ' has moved!');
    }

    public doSpecialAction(){
        window.alert('Undefined special action!');
    }
}

function consumeAnimal(animal: Animal){
    window.alert(animal.getType());
    window.alert(animal.getNumberOfEyes());
    window.alert(animal.getNumberOfLimbs());
    animal.move();
    animal.doSpecialAction();
}

class Dog extends Animal{
    public getType(){
        return 'Dog';
    }
    
    public bark(){
        window.alert('Dog is barking...');
    }

    public doSpecialAction(){
        this.bark();
    }
}

class Cat extends Animal{
    public getType(){
        return 'Cat';
    }
    
    public purr(){
        window.alert('Cat is purring...');
    }

    public doSpecialAction(){
        this.purr();
    }
}

class Chicken extends Animal{
    public getType(){
        return 'Chicken';
    }

    public getNumberOfLimbs(){
        return 2;
    }

    public cluck(){
        window.alert('Chicken is clucking...');
    }

    public doSpecialAction(){
        this.cluck();
    }
}

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