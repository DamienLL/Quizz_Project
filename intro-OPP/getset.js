class User {
    firstname = 'par défaut';
    lastname;
    email;
    // * On rend cette propriété privée : elle n'est pas accessible depuis l'extérieur de la classe
    #password;

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
        this.#password = infos.password;
    }

    /**
     * ! Une fonction dans une classe ne s'appelle plus une fonction mais une méthode
     * @returns string
     */
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    // * Un accesseur (getter) sert à retourner une prop privée
    get password() {
        return this.#password;
    }
    // * Un mutateur (setter) sert à modifier une prop privée
    set password(newPassword) {
        this.#password = newPassword;
    }

    static insert(infos) {
        `INSERT INTO etc etc`;
    }
}

const infos = {
    firstname: 'Laurent',
    lastname: 'oclock',
    email: 'laurent@oclocl.io',
    password: 'pijdfgl$kn,dtghbopnikjdgfhlknn,',
};

const user = new User(infos);

console.log(user.fullName);

// On se sert d'un accesseur comme d'une propriété classique qu'un objet (on appelle pas une méthode : on accède à une propriété)
console.log(user.password);
// On se sert d'un mutateur comme d'une propriété classique qu'un objet (on appelle pas une méthode : on accède à une propriété)
user.password = 'ùojqdnrfgùojndrgùkojndrg';

user.firstname = 'ùojqdnrfgùojndrgùkojndrg';

console.log(user);

class Employee extends User {
    static level = ['manager', 'CEO'];

    job;

    constructor(infos, job) {
        super(infos);

        this.job = job;
    }

    static fourchetteDeSalaire() {
        return 'entre 90000 et 852022359';
    }
}

const job = Employee.level[0];
infos.job = job;
const employee = new Employee(infos, job);
console.log(employee);

console.log(Employee.fourchetteDeSalaire());
