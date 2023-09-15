import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Phone } from './components/Icons';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPageContext
} from 'next';
import Link from 'next/link';
import { Food } from '../src/db/schema';

const inter = Inter({ subsets: ['latin'] });

export const url = process.env.url;

export default function Home({ foods }: { foods: Food[] }) {
  // const result = await db.select().from(users);

  let phone = '+32 2 215 68 80';

  const NavBar = () => (
    <nav className="fixed right-0 left-2 top-4 z-50 navbar">
      <Link href={{ pathname: '/' }} className="flex items-center w-16 h-16">
        <Image
          src={'/images/logo.png'}
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
        <title>Pizzeria del parco</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className="">
        <header>
          <section className="relative bg-[url(https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gray-100/25 sm:bg-transparent sm:from-white/95 sm:to-white/25 lg:from-white/95"></div>
            <NavBar />
            <div className="relative px-4 py-32 mx-auto max-w-screen-xl sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                  Pizzeria
                  <strong className="block font-extrabold text-green-600">
                    del Parco
                  </strong>
                </h1>

                <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                  The best pizzas in Schaerbeek
                </p>

                <div className="flex flex-wrap gap-4 mt-8 text-center">
                  <a
                    href="#menu"
                    className="block px-12 py-3 w-full text-sm font-medium text-white bg-green-600 rounded shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                  >
                    Menu
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="flex justify-center px-12 py-3 w-full text-sm font-medium text-white bg-green-600 rounded shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="pl-2">{phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </header>
        <section id="menu" className="bg-white">
          <ul className="flex flex-col gap-2 p-5 mx-auto max-w-screen-xl">
            {!!foods?.length &&
              foods?.map((food, index) => (
                <li
                  key={index}
                  className="flex flex-col p-4 bg-gray-100 rounded-lg border-none shadow-lg gap-500"
                >
                  <div className="flex justify-between">
                    <h3>{food.name}</h3>
                    <div>
                      <span>{food.price}€</span>
                      <p>{food.veg}</p>
                    </div>
                  </div>
                  <p>{food.ingredients}</p>
                </li>
              ))}
          </ul>
        </section>

        <section className="px-4 py-8 mx-auto bg-green-600 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <section>
            <div className="px-4 py-8 mx-auto max-w-screen-xl text-white sm:py-12 sm:px-6 lg:py-16 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="overflow-hidden relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5036.492052021641!2d4.378349598993729!3d50.86364490840784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c369825a79f7%3A0x7d07d919fea37490!2sPizzeria%20del%20Parco!5e0!3m2!1sfr!2sbe!4v1694765031766!5m2!1sfr!2sbe"
                    width="600"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="lg:py-24">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Venez manger chez nous
                  </h2>

                  <p className="mt-4 text-gray-200">
                    Ouvert du mardi au dimanche de 12h à 14h et de 18h à 22h
                  </p>
                  <p className="mt-4 text-gray-200">Rue des Paquerettes, 122</p>
                  <p className="mt-2 text-gray-200">1030 Schaerbeek</p>
                  <div className="pt-4">
                    <a
                      href={`tel:${phone}`}
                      className="flex justify-center px-12 py-3 text-sm font-medium text-center text-white bg-green-600 rounded border border-white transition sm:inline-block sm:w-auto hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      <div className="flex items-center">
                        <Phone className="w-5 h-5" />
                        <span className="pl-2">{phone}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <footer className="bg-gray-50">
          <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex justify-center items-center text-green-600 sm:justify-start">
                <Image
                  src={'/images/logo.png'}
                  width={100}
                  height={100}
                  className="object-contain"
                  alt="pizzeria-del-parco"
                />
                <h2 className="text-3xl font-bold">Pizzeria del Parco</h2>
              </div>

              <p className="mt-4 text-sm text-center text-gray-500 lg:mt-0 lg:text-right">
                Copyright &copy;{new Date().getFullYear()} Pizzeria del Parco.
                All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = !!process.env.URL ? process.env?.URL : 'http://localhost:3000';

  const query = await fetch(new URL('/api/foods', url));
  const data = await query.json();
  console.log('data ', data);
  return {
    props: { foods: data }
  };
};
