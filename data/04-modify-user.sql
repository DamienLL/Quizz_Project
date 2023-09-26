-- * On souhaite modifier la table user, on veut ajouter un champ role
ALTER TABLE "user" ADD COLUMN "role" TEXT DEFAULT 'user';

UPDATE "user" SET role = 'admin' WHERE id = 1;