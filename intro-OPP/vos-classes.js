// Hicham
class Character {
    name;
    weapon;
    status;
    constructor(name, weapon, status) {
        this.name = name;
        this.weapon = weapon;
        this.status = status;
    }
}

class Vampire extends Character {
    constructor(name) {
        super(name, 'dents', 'mort-vivant');
    }
}

class Chevalier extends Character {
    constructor(name) {
        super(name, 'épée', 'vivant');
    }
}

let dracula = new Vampire('Dracula');
let simon = new Chevalier('Simon Belmont');

console.log(dracula);
console.log(simon);

// * Alexandre
class Character {
    name;
    weapon;
    statut;

    constructor(character) {
        this.name = character.name;
        this.statut = character.statut;
        this.weapon = character.weapon;
    }
}

class Knight extends Character {
    name = 'knight';
    statut = 'alive';
    weapon = 'sword';
}

class vampire extends Character {
    name = 'vampire';
    statut = 'dead';
    weapon = 'teeth';
}

// * Brenda
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

//* Alexis
class Character {
    arme;
    vivant;
    constructor() {
        this.arme = arme;
        this.vivant = vivant;
    }
}

class Vampire extends Character {
    constructor() {
        super('dent', false);
    }
}
class Chevalier extends Character {
    constructor() {
        super('épée', true);
    }
}

const vampire = new Vampire();
const chevalier = new Chevalier();

// *
