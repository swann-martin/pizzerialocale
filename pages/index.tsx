import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Drink, Food } from '../src/db/schema';
import Footer from '../components/Footer';
import ContactMap from '../components/ContactMap';
import Hero from '../components/Hero';
import { useState } from 'react';
import FoodMenuItem from '../components/FoodMenuItem';
import DrinkMenuItem from '../components/DrinkMenuItem';

const inter = Inter({ subsets: ['latin'] });

export const url = process.env.url;

export default function Home({
  foods,
  drinks,
  ingredients
}: {
  foods: Food[];
  drinks: Drink[];
  ingredients: string[];
}) {
  let phone = '+32 2 215 68 80';
  const title = 'Pizzeria del parco';
  const pizzasString = 'pizza';
  const dessertsString = 'desserts';
  const patesString = 'pâtes';

  const [openAccordion, setOpenAccordion] = useState<null | number>(1);
  const handleAccordionClick = (index: number) => {
    if (index !== openAccordion) {
      setOpenAccordion(index);
    } else {
      setOpenAccordion(null);
    }
  };

  const desserts = foods?.filter(
    (el) => el.type.toLowerCase() === dessertsString
  );
  const pizzas = foods?.filter((el) => el.type.toLowerCase() === pizzasString);

  const pates = foods?.filter((el) => el.type.toLowerCase() === patesString);

  const foodsItems = [
    { foods: pizzas, title: pizzasString, ingredients: ingredients },
    { foods: pates, title: patesString },
    { foods: desserts, title: dessertsString }
  ];

  const ingredientsFilter = [
    'champignons',
    'jambon',
    'mozzarella',
    'viande'
  ].sort();

  const NavBar = () => (
    <nav className="fixed right-0 left-2 top-4 z-50 navbar">
      <Link
        href={{ pathname: '/' }}
        className="flex items-center w-10 h-10 md:w-12 md:h-12"
      >
        <Image
          src={'/images/logo.avif'}
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
        <meta
          name="description"
          content="Pizzeria del parco, the best pizzas in Schaerbeek, call us to order your pizza at +32 2 215 68 80'"
        />
      </Head>
      <main className="main">
        <Hero phone={phone}>
          <NavBar />
        </Hero>

        <section id="menu" className="py-3 mx-auto max-w-screen-xl bg-white">
          {foodsItems.map(({ foods, title }, index) => (
            <FoodMenuItem
              key={title + index}
              foods={foods}
              title={title}
              ingredients={index === 0 ? ingredientsFilter : []}
              index={index + 1}
              openAccordion={openAccordion}
              handleAccordionClick={handleAccordionClick}
            />
          ))}
          <DrinkMenuItem
            drinks={drinks}
            openAccordion={openAccordion}
            handleAccordionClick={handleAccordionClick}
            index={0}
            title={title}
          />
        </section>
        <ContactMap phone={phone} />
        <Footer title={title} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const url = !!process.env.URL
      ? process.env?.URL
      : 'https://pizzerialocale.vercel.app/';

    const query = await fetch(new URL('/api/foods', url));
    const data = await query.json();

    const foods: Food[] = data?.foods;
    let rawIngredients = foods
      ?.map(
        (food: Food) => food.type === 'Pizza' && food?.ingredients?.split(',')
      )
      ?.flat();
    rawIngredients = rawIngredients
      .filter((el) => el !== false)
      ?.map((el) => !!el && el?.trim()?.toLowerCase())
      .sort((a, b) =>
        typeof a === 'string' && typeof b === 'string' ? a?.localeCompare(b) : 0
      );
    let uniqueIngredients = [...new Set(rawIngredients)];

    return {
      props: {
        foods: data?.foods,
        drinks: data?.drinks,
        ingredients: uniqueIngredients
      }
    };
  } catch (err) {
    return {
      props: {
        foods: [],
        drinks: [],
        ingredients: []
      }
    };
  }
};
