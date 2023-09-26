const user = {
    firstname: 'Laurent',
    lastname: 'Oclock',
    email: 'laurent@oclock.io',
    password: 'oijqhsdfgolkneffglkneefgglkn',
};

const user2 = {
    lastname: 'Oclock',
    email: 'laurent@oclock.io',
    password: 'oijqhsdfgolkneffglkneefgglkn',
};

const infos = {
    lastname: 'Oclock',
    email: 'laurent@oclock.io',
    password: 'oijqhsdfgolkneffglkneefgglkn',
};

function UserFactory(infos) {
    if (infos.firstname) {
        return {
            firstname: infos.firstname,
            lastname: infos.lastname,
            email: infos.email,
            password: infos.password,
        };
    }

    throw new Error('un élément est manquant');
}

// const o_user = new UserFactory(infos);

// Le nom d'une classe sera toujours avec une majuscule en premier

class User {
    firstname = 'par défaut';
    lastname;
    email;
    password;

    /**
     *
     * @param {object} infos
     */
    constructor(infos) {
        if (infos.firstname) {
            this.firstname = infos.firstname;
        }
        this.lastname = infos.lastname;
        this.email = infos.email;
        this.password = infos.password;
    }

    /**
     * ! Une fonction dans une classe ne s'appelle plus une fonction mais une méthode
     * @returns string
     */
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

// * le mot clé new va permettre de créer un objet à partir d'un classe : on appelle ça instancier une classe
const o_user = new User(infos);
// o_user est une instance de la classe User
const o_user2 = new User(user);
console.log(o_user);
console.log(o_user2.getFullName());
// console.log(o_user instanceof User);

// * Le constructeur prend des paramètres comme une fonction classique
class Car {
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
}

const car = {
    brand: 'Red Bull',
    commercialName: 'rb23',
};

const o_car = new Car(car.brand, car.commercialName);

console.log(o_car.getFullName());
