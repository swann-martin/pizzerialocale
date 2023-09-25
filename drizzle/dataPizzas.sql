DO $$ BEGIN
 CREATE TYPE "typeDrink" AS ENUM('Vin Blanc', 'Vin Rosé', 'Vin Rouge', 'Sans alcool', 'Liqueur', 'Bière', 'Apéritif');
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
	"ingredients" text,
  "veg" boolean default false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ingredients" (
	"id" serial PRIMARY KEY NOT NULL,
	"ingredient_name" varchar(256)
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "name_idx" ON "foods" ("name");



insert into "public"."foods" ("ingredients", "name", "price", "type") 
values 
('Tomate, mozzarella, salami, câpres, oignons.', 'Sorrento', '10.50', 'Pizza'),
('Tomate, mozzarella, champignons.', 'Funghi', '9.50', 'Pizza'),
('Tomate, mozzarella, jambon.', 'Prosciutto', '9.50', 'Pizza'),
('Tomate, mozzarella, jambon, champignons', 'Capricciosa', '10.50', 'Pizza'),
('Tomate, mozzarella, salami, pancetta, aubergines', 'Calabrese', '11.00', 'Pizza'),
('Tomate, mozzarella, salami piquant, poivrons, oignons, pili-pili.', 'San Giuseppe', '11.00', 'Pizza'),
('Tomate, mozzarella, jambon, jaune d’œuf.', 'Bismark', '10.00', 'Pizza'),
('Tomate, mozzarella, salami, oignons, œuf.', 'Milano', '11.00', 'Pizza'),
('Tomate, mozzarella, anchois, oignons, câpres.', 'Siciliana', '10.50', 'Pizza'),
('Tomate, mozzarella, jambon, champignons artichauts, anchois, olives', 'Quattro Stagioni', '11.50', 'Pizza'),
('Tomate, mozzarella, jambon, (croissant de lune)', 'Calzone', '10.50', 'Pizza');


insert into public.drinks ("name", "price", "typeDrink") values 
('Maison', 6.00, 'Apéritif'),
('Gin Gordon''s', 5.00, 'Apéritif'),
('Vodka', 4.00, 'Apéritif'),
('Porto Rouge', 4.00, 'Apéritif'),
('Martini Blanc \ Rouge', 4.00, 'Apéritif'),
('G&B', 5.50, 'Apéritif'),
('Johnnie Walker', 6.00, 'Apéritif'),
('Bacardi', 5.00, 'Apéritif'),
('Jim Beam', 5.00, 'Apéritif'),
('Coca Cola light zero', 2.50, 'Sans alcool'),
('Fanta', 2.50, 'Sans alcool'),
('Ice Tea', 3.00, 'Sans alcool'),
('Jus d''orange', 2.50, 'Sans alcool'),
('Jus de pomme', 2.50, 'Sans alcool'),
('San Pellegino', 2.50, 'Sans alcool'),
('Vittel 25 cl', 2.50, 'Sans alcool'),
('Vittel 25 cl', 2.00, 'Sans alcool'),
('San Benedetto Plate 50cl', 5.00, 'Sans alcool'),
('San Benedetto Pétillant 50cl', 5.00, 'Sans alcool'),
('Jupiler', 2.50, 'Bière'),
('Kriek Belle-Vue', 3.00, 'Bière'),
('Leffe Blonde', 4.00, 'Bière'),
('OBAA One', 4.50, 'Bière'),
('Orval', 6.00, 'Bière');
