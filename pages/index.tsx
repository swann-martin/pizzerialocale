import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { Drink, Food, drinkEnum } from "../src/db/schema";
import Footer from "../components/Footer";
import ContactMap from "../components/ContactMap";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const url = process.env.url;

export default function Home({
  foods,
  drinks,
}: {
  foods: Food[];
  drinks: Drink[];
}) {
  let phone = "+32 2 215 68 80";
  const title = "Pizzeria del parco";

  const NavBar = () => (
    <nav className="fixed right-0 left-2 top-4 z-50 navbar">
      <Link href={{ pathname: "/" }} className="flex items-center w-16 h-16">
        <Image
          src={"/images/logo.png"}
          width={100}
          height={100}
          className="object-contain"
          alt="pizzeria-del-parco"
        />
      </Link>
    </nav>
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="main">
        <Hero phone={phone}>
          <NavBar />
        </Hero>

        <section id="menu" className="bg-white">
          <h2 className="pt-2 text-3xl font-extrabold text-center">Pizzas</h2>
          <ul className="flex flex-col gap-4 p-5 mx-auto max-w-screen-xl">
            {!!foods?.length &&
              foods?.map((food, index) => (
                <li
                  key={index}
                  className="flex flex-col p-4 bg-gray-100 rounded-lg border-none shadow-lg gap-500"
                >
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <h3>{food.name}</h3>
                      <p>{food.ingredients}</p>
                    </div>
                    <div className="flex flex-col">
                      <span>{food.price}€</span>
                      {food?.veg && (
                        <p className="text-green-600 text-extrabold">vegi</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <h2 className="pt-2 text-3xl font-extrabold text-center">Drinks</h2>

          <ul className="flex flex-col gap-4 p-5 mx-auto max-w-screen-xl">
            {!!drinks?.length &&
              drinks?.map((drink, index) => {
                return (
                  <li
                    key={drink.name + drink.id}
                    className="flex flex-col p-4 bg-gray-100 rounded-lg border-none shadow-lg gap-500"
                  >
                    <div className="flex justify-between">
                      <h3>{drink.name}</h3>
                      <div>
                        <span>{drink.price}€</span>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
        <ContactMap phone={phone} />
        <Footer title={title} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = !!process.env.URL ? process.env?.URL : "http://localhost:3000";

  const query = await fetch(new URL("/api/foods", url));
  const data = await query.json();
  console.log("data ", data);
  return {
    props: { foods: data?.foods, drinks: data?.drinks },
  };
};
