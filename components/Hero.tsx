import React from 'react';
import { Phone } from './Icons';

const Hero = ({
  phone,
  children
}: {
  phone: string;
  children: React.ReactNode;
}) => {
  const caption = 'Les meilleures pizzas de Schaerbeek !';
  return (
    <header>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1600628421066-f6bda6a7b976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-100/25 sm:bg-transparent sm:from-white/95 sm:to-white/25 lg:from-white/95"></div>
        {children}
        <div className="relative px-4 py-32 mx-auto max-w-screen-xl sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Pizzeria
              <strong className="block font-extrabold text-green-600">
                del Parco
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              {caption}
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
  );
};

export default Hero;
