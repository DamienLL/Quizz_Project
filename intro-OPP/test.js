class Vehicle {
    brand;
    commercialName;

    /**
     *
     * @param {string} brand
     * @param {string} commercialName
     */
    constructor(brand, commercialName) {
        this.brand = brand;
        this.commercialName = commercialName;
    }

    /**
     *
     * @returns string
     */
    getFullName() {
        return `${this.brand} ${this.commercialName}`;
    }

    start() {
        return 'vrroom vrooommm';
    }
}

/**
 * * Le mot clé extends permet l'héritage : on hérite des définitions et méthodes d'une classe parente
 */
class Car extends Vehicle {
    nbWheels;

    constructor(brand, commercialName, nbWheels = 4) {
        // *  On appelle super() dans le constructeur enfant avant d'utiliser le mot clé this
        // * OU
        // *  On appelle super() dans le constructeur enfant avant de retourner qqchose du constructeur
        // ! attention bug à venir
        // * Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(brand, commercialName);

        if (nbWheels) {
            this.nbWheels = nbWheels;
        }
    }
}

const car = new Car('porshe', 'le mans series');
console.log(car.start());
console.log(car.getFullName());

const limousine = new Car('limousine', 'vegas', 8);
console.log(limousine);

class Truck extends Vehicle {
    nbWheels = 18;

    // pas de constructeur : brand et commercialName seront undefined :/

    getFullName() {
        return this.brand;
    }
}

const truck = new Truck('renault', 'gros camion');
console.log(truck);
console.log(truck.getFullName());

/*======*/

// * Créer une class Character de laquelle hériteront une classe vampire et une classe chevalier
// * Le chevalier aura une arme : épée, le chevalier est vivant
// * Le vampire aura une arme : dents, le vampire est mort-vivant

class Character {
    name;
    weapon;
    status;
    constructor(name, weapon, status) {
        this.name = name;
        this.weapon = weapon;
        this.status = status;
    }

    attack() {
        console.log(`${this.name} attaque avec ${this.weapon}.`);
    }
}

class Vampire extends Character {
    constructor(name) {
        super(name, 'dents', 'mort-vivant');
    }
}

class Knight extends Character {
    constructor(name) {
        super(name, 'épée', 'vivant');
    }
}

const vampire = new Vampire('Dracula');
vampire.attack();

const knight = new Knight('Arthur');
knight.attack();
