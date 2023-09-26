const dataMapper = require('./dataMapper');
const User = require('../models/user');

async function main() {
    const data = await dataMapper.findAllTags();

    return data;
}

// * Cette syntaxe est a réserver aux fonctions async
main()
    // * on, attend que la fonction main est fini son boulot et éventuellement on récupère ce qu'elle nous retournes
    .then((data) => {
        console.log(data);
        if (data instanceof User) {
            console.log(data.fullName);
        }
    })
    // * Si une erreur s'est produite, on la gère dans le .catch()
    .catch((err) => console.log(err.message))
    // * Peu importe que l'on rencontre une erreur ou non, le code contenu dans le finally s'exécutera toujours
    .finally(() => process.exit());
