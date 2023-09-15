CREATE TABLE IF NOT EXISTS "test_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"qty" integer,
	"price" numeric(7, 2),
	"delivered" boolean,
	"start_at" time,
	"date" interval,
	"name" varchar(256)
);
