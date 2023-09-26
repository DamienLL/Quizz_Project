CREATE DATABASE SANS_TITRE;
\c SANS_TITRE;

CREATE TABLE CATÉGORIE (
  code_catégorie VARCHAR(42),
  nom VARCHAR(42),
  PRIMARY KEY (code_catégorie)
);

CREATE TABLE DETIENT (
  code_catégorie VARCHAR(42),
  code_quizz VARCHAR(42),
  PRIMARY KEY (code_catégorie, code_quizz)
);

CREATE TABLE NIVEAU (
  code_niveau VARCHAR(42),
  nom VARCHAR(42),
  PRIMARY KEY (code_niveau)
);

CREATE TABLE QUESTION (
  code_question VARCHAR(42),
  question VARCHAR(42),
  anecdote VARCHAR(42),
  wiki VARCHAR(42),
  code_reponse VARCHAR(42),
  code_niveau VARCHAR(42),
  code_quizz VARCHAR(42),
  PRIMARY KEY (code_question)
);

CREATE TABLE QUIZZ (
  code_quizz VARCHAR(42),
  titre VARCHAR(42),
  description VARCHAR(42),
  code_user VARCHAR(42),
  PRIMARY KEY (code_quizz)
);

CREATE TABLE REPONSE (
  code_reponse VARCHAR(42),
  description VARCHAR(42),
  code_question VARCHAR(42),
  PRIMARY KEY (code_reponse)
);

CREATE TABLE USER (
  code_user VARCHAR(42),
  prénom VARCHAR(42),
  nom VARCHAR(42),
  email VARCHAR(42),
  mot_de_passe VARCHAR(42),
  PRIMARY KEY (code_user)
);

ALTER TABLE DETIENT ADD FOREIGN KEY (code_quizz) REFERENCES QUIZZ (code_quizz);
ALTER TABLE DETIENT ADD FOREIGN KEY (code_catégorie) REFERENCES CATÉGORIE (code_catégorie);
ALTER TABLE QUESTION ADD FOREIGN KEY (code_quizz) REFERENCES QUIZZ (code_quizz);
ALTER TABLE QUESTION ADD FOREIGN KEY (code_niveau) REFERENCES NIVEAU (code_niveau);
ALTER TABLE QUESTION ADD FOREIGN KEY (code_reponse) REFERENCES REPONSE (code_reponse);
ALTER TABLE QUIZZ ADD FOREIGN KEY (code_user) REFERENCES USER (code_user);
ALTER TABLE REPONSE ADD FOREIGN KEY (code_question) REFERENCES QUESTION (code_question);