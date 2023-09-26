En utilisant l'analyse préliminaire de la BDD, le MCD, et la [fiche récap MLD](https://kourou.oclock.io/ressources/fiche-recap/mld) , écrire le MLD de l'application !

```
user ( id INTEGER, firstname TEXT, lastname TEXT, email TEXT, password TEXT )
quiz ( id INTEGER, title TEXT, description TEXT, #user(id) )

level ( id INTEGER, nom TEXT )
question ( id INTEGER, description TEXT, anecdote TEXT, wiki TEXT, #quizz(id), #answer(id), #level(id) )
answer ( id INTEGER, description TEXT, #question(id) )

tag ( id INTEGER, nom TEXT)

quizz_has_tag ( #quizz(id), #tag(id) )
```

Notes : Les types de données sont facultatifs

## Bonus

Écrire le fichier SQL pour créer les tables listées dans le MLD.

```sql
CREATE TABLE question (
    id INT SERIAL PRIMARY KEY,
    description TEXT,
    anecdote TEXT,
    wiki TEXT,
    quiz_id INT,
    answer_id INT,
    level_id INT,
    FOREIGN KEY (quiz_id) REFERENCES quiz (id),
    FOREIGN KEY (answer_id) REFERENCES answer (id),
    FOREIGN KEY (level_id) REFERENCES level (id)
);
```
