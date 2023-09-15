DO $$ BEGIN
 CREATE TYPE "typeDrink" AS ENUM('Vin Blanc', 'Vin Rosé', 'Sans alcool', 'Liqueur', 'Bière', 'Apéritif');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "drinks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"price" numeric(12, 2),
	"typeDrink" "typeDrink"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "foods" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"type" varchar(256),
	"price" numeric(12, 2),
	"ingredients" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ingredients" (
	"id" serial PRIMARY KEY NOT NULL,
	"ingredient_name" varchar(256)
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "foods" ("name");