DO $$ BEGIN
 CREATE TYPE "typeDrink" AS ENUM('Vin Blanc', 'Vin Rosé', 'Vin Rouge', 'Sans alcool', 'Liqueur', 'Bière', 'Apéritif', 'Lambrusco');
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
('tomate , mozzarella , salami, câpres, oignons.', 'Sorrento', '10.50', 'Pizza'),
('tomate , mozzarella , champignons', 'Funghi', '9.50', 'Pizza'),
('tomate , mozzarella , jambon ', 'Prosciutto', '9.50', 'Pizza'),
('tomate , mozzarella , jambon , champignons', 'Capricciosa', '10.50', 'Pizza'),
('tomate , mozzarella , salami , pancetta , aubergines', 'Calabrese', '11.00', 'Pizza'),
('tomate , mozzarella , salami , piquant , poivrons , oignons , pili-pili', 'San Giuseppe', '11.00', 'Pizza'),
('tomate , mozzarella , jambon , jaune d’œuf' , 'Bismark', '10.00', 'Pizza'),
('tomate , mozzarella , salami , oignons , œuf', 'Milano', '11.00', 'Pizza'),
('tomate , mozzarella , anchois , oignons, câpres', 'Siciliana', '10.50', 'Pizza'),
('tomate , mozzarella , jambon, champignons , artichauts , anchois , olives', 'Quattro Stagioni', '11.50', 'Pizza'),
('tomate , mozzarella , jambon', 'Calzone', '10.50', 'Pizza'),
('tomate , ail , fruits de mer', 'Frutti di Mare', '11.50', 'Pizza'),
('tomate , quatre fromages', 'La Ruota', '12.50', 'Pizza'),
('tomate , mozzarella , jambon de Parme', 'Romana', '12.00', 'Pizza'),
('tomate , mozzarella , saumon , oignons', 'Salmon', '12.00', 'Pizza'),
('tomate , mozzarella , lardons , poivrons , oignons', 'Don Santo', '10.50', 'Pizza'),
('tomate , mozzarella , jambon , ananas', 'Hawaïenne', '10.00', 'Pizza'),
('tomate , mozzarella , aubergines , parmesan', 'Norma', '10.00', 'Pizza'),
('tomate , mozzarella , viande hachée , œuf', 'Bolognese', '10.00', 'Pizza'),
('tomate , mozzarella , thon , jambon , oignons', 'Venedig', '11.00', 'Pizza'),
('tomate , mozzarella , thon , jambon , champignons , béarnaise , ail', 'Venezia', '12.00', 'Pizza'),
('tomate , mozzarella , viande dœuf , béarnaise , piquant', 'Maestro', '11.50', 'Pizza'),
('tomate , mozzarella , légumes variés', 'Végératienne', '11.50', 'Pizza'),
('tomate , mozzarella , jambon , champignons , artichauts , feta , œuf', 'Greco - Romaine', '12.50', 'Pizza'),
('tomate , mozzarella , épinards', 'Epinard', '9.50', 'Pizza'),
('tomate , mozzarella , thon, anchois , oignons', 'Thon', '11.00', 'Pizza'),
('tomate , mozzarella , scampi , ail', 'Scampi', '13.00', 'Pizza'),
('tomate , mozzarella , viande de boeuf , champignons , béarnaise', 'Du Chef', '12.00', 'Pizza'),
('tomate , mozzarella , viande de boeuf , parmesan , roquette', 'Rustica', '11.00', 'Pizza'),
('tomate , mozzarella , viande hachée , poivrons , béarnaise , ail', 'Alla Bella', '11.00', 'Pizza'),
('tomate , mozzarella , parmesan , aubergines , roquette', 'Parmiggiana', '11.00', 'Pizza'),
('tomate , mozzarella , foie gras , truffes , parmesan, roquette', 'Del Parco', '14.00', 'Pizza'),
('tomate , mozzarella , viande , champignons , piment , olives', 'Peja', '13.00', 'Pizza'),
('tomate , mozzarella , gorgonzola', 'Gorgonzola', '13.00', 'Pizza'),
('tomate , mozzarella , viande hachée, sauce du Chef , oignons , choux chinois , poivrons', 'Chou', '13.00', 'Pizza'),
('tomate , mozzarella , jambon , bananes , ananas , curry', 'Tutti Frutti', '10.50', 'Pizza'),
('tomate , mozzarella , oignons , jaune d’œuf , roquette , ail', 'Italia', '11.00', 'Pizza'),
('tomate , mozzarella , jambon , salami , oignons , ail , piquant', 'Amore Mio', '11.50', 'Pizza'),
('tomate , ail , piquant', 'Marinara', '8.50', 'Pizza'),
('tomate , mozzarella , jambon de Parme, courgettes', 'Nusco', '12.00', 'Pizza'),
('tomate , mozzarella , champignons , oignons , saucisson de boeuf', 'Albi', '12.50', 'Pizza'),
('tomate , mozzarella , courgettes , oignons , champignons , poivrons , aubergines , scampi', 'Don Pepa', '13.00', 'Pizza'),
('tomate , mozzarella , viande de boeuf , roquette , parmesan', 'Carpacio', '14.00', 'Pizza'),
('tomate , mozzarella , mozzarella de buffala , truffes , roquette , parmesan', 'Don Felice', '15.00', 'Pizza'),
('tomate , mozzarella , champignons , poulet', 'Poulet', '12.00', 'Pizza'),
('tomate , burrata al tartufo, jambon de Parme, roquette', 'Elion', '17.00', 'Pizza'),
('pain , ail', 'Pain à l""ail', '4.50', 'Pains'),
('pain , ail , mozzarella', 'Pain à l""ail et mozzarella', '6.00', 'Pains'),
('pâte fraiche, viande de bœuf, ricotta, parmesan', 'Cannelloni', '12.50', 'Pâtes'),
('pâte fraiche, épinards, ricotta, parmesan', 'Cannelloni Epinard', '11.50', 'Pâtes'),
('', 'Tiramisu', '6.00', 'Desserts'),
('', 'Dame Blanche', '5.50', 'Desserts'),
('', 'Tartufo Nero', '5.50', 'Desserts'),
('', 'Pizza Nutella', '10.00', 'Desserts'),
('', 'Sorbet au Limoncello', '6.50', 'Desserts'),
('', 'Moelleux au chocolat', '7.00', 'Desserts');


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
('Orval', 6.00, 'Bière'),
('Corvo Rossato 0.75cl', 23.00, 'Vin Rosé'),
('Corvo Blanc 0.75cl', 23.00, 'Vin Blanc'),
('Montepulciano d""Abruzzo 0.75cl', 19.00, 'Vin Blanc'),
('Pino Giego 0.75cl', 19.00, 'Vin Blanc'),
('Corvo Rosso 0.75cl', 23.00, 'Vin Rouge'),
('Montepulciano d""Abruzzo 0.75cl', 19.00, 'Vin Rouge'),
('Nero d""Avola 0.75cl', 19.00, 'Vin Rouge'),
('Salice Salentino 0.75cl', 30.00, 'Vin Rouge'),
('Valpolicella 0.75cl', 31.00, 'Vin Rouge'),
('Barolo 0.75cl', 56.00, 'Vin Rouge'),
('Bardolino 0.375cl', 12.00, 'Vin Rouge'),
('Corvo 0.375cl', 14.00, 'Vin Rouge'),
('Amabile 0.75cl', 14.00, 'Lambrusco'),
('Vin du Patron verre', 3.00, 'Vin Rouge'),
('Vin du Patron 0.25cl', 5.50, 'Vin Rouge'),
('Vin du Patron 0.5cl', 8.50, 'Vin Rouge'),
('Vin du Patron 1l', 16.00, 'Vin Rouge'),
('Vin du Patron verre', 3.00, 'Vin Rosé'),
('Vin du Patron 0.25cl', 5.50, 'Vin Rosé'),
('Vin du Patron 0.5cl', 8.50, 'Vin Rosé'),
('Vin du Patron 1l', 16.00, 'Vin Rosé'),
('Vin du Patron verre', 3.00, 'Vin Blanc'),
('Vin du Patron 0.25cl', 5.50, 'Vin Blanc'),
('Vin du Patron 0.5cl', 8.50, 'Vin Blanc'),
('Vin du Patron 1l', 16.00, 'Vin Blanc'),
('Grappa', 5.00, 'Liqueur'),
('Limocello', 5.00, 'Liqueur'),
('Sambucca', 5.50, 'Liqueur'),
('Ricard', 4.50, 'Liqueur'),
('Cointreau', 4.50, 'Liqueur'),
('Amaretto', 6.00, 'Liqueur'),
('Baileys', 4.50, 'Liqueur'),
('Cognac', 7.00, 'Liqueur'),
('Chivas', 6.00, 'Liqueur'),
('Grand Marnier', 7.00, 'Liqueur'),
('Café', 2.50, 'Sans alcool'),
('Thé', 2.50, 'Sans alcool');

