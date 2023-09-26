### MCD

Identification des entités :

-   Quizz
-   Question
-   Thèmes : Catégorie
-   User : Utilisateur : Author
-   Réponse : Answer : Bonne réponse : Toutes les réponses
-   Difficulté : Niveau : Level

```
quizz: code quizz, titre, description
user: code user, prénom, nom, email, mot de passe
question: code question, question, anecdote, wiki
reponse: code reponse, description
catégorie: code catégorie, nom
niveau: code niveau, nom
```

Différents d'associations :
one to one
one to many
many to many

Quizz est associé à Question ? oui : one to many 1 quizz N question

Question et Reponse : One to Many Une question et plusieurs propositions de réponses ?

Question et Bonne Reponse : valide , 11 reponse, 01 question

Quizz et User ? oui un User crée un Quizz (auteur) : créé 11 User , 0N quizz : one-to-many

Categorie et Quizz ? Oui : appartient / lié Many to Many ?

Question et Niveau ? Oui : One to Many ? défini 0N niveau, 11 question

```
:
:
valide , 01 reponse, 11 question

niveau: code niveau, nom
défini, 0N niveau, 11 question
question: code question, question, anecdote, wiki
possède, 0N question, 11 reponse
reponse: code reponse, description

compose, 0N quizz, 11 question

user: code user, prénom, nom, email, mot de passe
créé, 0N user , 11 quizz
quizz: code quizz, titre, description
detient, 0N catégorie, 0N quizz
catégorie: code catégorie, nom
```
