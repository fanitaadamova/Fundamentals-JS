class Dog {
    constructor(dogName, dogBreed) {
     this.name = dogName;
     this.breed = dogBreed;
    }

    bark (){
        console.log(`${this.name} is ${this.breed}: wof wof`);
    }
}
let firstDog = new Dog ("Rila", "Balkan");
let secondDog = new Dog("Aira", "Canecorso");

firstDog.bark()
secondDog.bark()