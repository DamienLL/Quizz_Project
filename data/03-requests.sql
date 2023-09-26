SELECT
"Level"."id",
"Level"."name",
"Level"."created_at" AS "createdAt",
"Level"."updated_at" AS "updatedAt",
"questions"."id" AS "questions.id",
"questions"."description" AS "questions.description",
"questions"."wiki" AS "questions.wiki",
"questions"."anecdote" AS "questions.anecdote",
"questions"."level_id" AS "questions.level_id",
"questions"."quiz_id" AS "questions.quiz_id",
"questions"."answer_id" AS "questions.answer_id",
"questions"."created_at" AS "questions.createdAt",
"questions"."updated_at" AS "questions.updatedAt"
FROM "level" AS "Level"
LEFT OUTER JOIN "question" AS "questions"
ON "Level"."id" = "questions"."level_id"
WHERE "Level"."id" = 1;


--

SELECT
"Question"."id",
"Question"."description",
"Question"."wiki",
"Question"."anecdote",
"Question"."level_id",
"Question"."quiz_id",
"Question"."answer_id",
"Question"."created_at" AS "createdAt",
"Question"."updated_at" AS "updatedAt",
"level"."id" AS "level.id",
"level"."name" AS "level.name",
"level"."created_at" AS "level.createdAt",
"level"."updated_at" AS "level.updatedAt"
FROM "question" AS "Question"
LEFT OUTER JOIN "level" AS "level"
ON "Question"."level_id" = "level"."id"
WHERE "Question"."id" = 1;


SELECT
"Quiz"."id",
"Quiz"."title",
"Quiz"."description",
"Quiz"."user_id",
"Quiz"."created_at",
"Quiz"."updated_at",
"tags"."id" AS "tags.id",
"tags"."name" AS "tags.name",
"tags"."created_at" AS "tags.created_at",
"tags"."updated_at" AS "tags.updated_at",
"tags->quiz_has_tag"."created_at" AS "tags.quiz_has_tag.created_at", "tags->quiz_has_tag"."updated_at" AS "tags.quiz_has_tag.updated_at", "tags->quiz_has_tag"."quiz_id" AS "tags.quiz_has_tag.quiz_id", "tags->quiz_has_tag"."tag_id" AS "tags.quiz_has_tag.tag_id"
FROM "quiz" AS "Quiz"
LEFT OUTER JOIN ( "quiz_has_tag" AS "tags->quiz_has_tag" INNER JOIN "tag" AS "tags" ON "tags"."id" = "tags->quiz_has_tag"."tag_id")
ON "Quiz"."id" = "tags->quiz_has_tag"."quiz_id"
WHERE "Quiz"."id" = 1;