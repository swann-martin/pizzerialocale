import {
  boolean,
  integer,
  interval,
  numeric,
  pgEnum,
  pgTable,
  serial,
  text,
  time,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

// declaring enum in database
export const drinkEnum = pgEnum("typeDrink", [
  "Vin Blanc",
  "Vin Rosé",
  "Sans alcool",
  "Liqueur",
  "Bière",
  "Apéritif",
]);

export type Food = {
  name: string;
  ingredients: string[];
  price: number;
  veg: boolean;
};
export type Drink = {
  id: number;
  name: string;
  price: number;
  typeDrink: typeof drinkEnum;
};

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  adress: varchar("adress", { length: 256 }),
  city: varchar("city", { length: 256 }),
});

export const foods = pgTable(
  "foods",
  {
    foods_id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    type: varchar("type", { length: 256 }),
    price: numeric("price", { precision: 12, scale: 2 }),
    ingredients: text("ingredients"),
    veg: boolean("veg").default(false),
  },
  (foods) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(foods.name),
    };
  }
);

export const drinks = pgTable("drinks", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  price: numeric("price", { precision: 12, scale: 2 }),
  typeDrink: drinkEnum("typeDrink"),
});

export const ingredients = pgTable("ingredients", {
  id: serial("id").primaryKey(),
  name: varchar("ingredient_name", { length: 256 }),
});

export const testTable = pgTable("test_table", {
  id: serial("id").primaryKey(),
  qty: integer("qty"),
  price: numeric("price", { precision: 7, scale: 2 }),
  delivered: boolean("delivered"),
  startAt: time("start_at"),
  date: interval("date"),
  name: varchar("name", { length: 256 }),
});
