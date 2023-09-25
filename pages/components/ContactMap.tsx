import React from 'react';
import { Phone } from './Icons';

const ContactMap = ({ phone }: { phone: string }) => {
  let mapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.3337702502745!2d4.3799908765816!3d50.86202037167377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c369825a79f7%3A0x7d07d919fea37490!2sPizzeria%20del%20Parco!5e0!3m2!1sfr!2sbe!4v1695281485579!5m2!1sfr!2sbe';
  const street = 'Rue des Paquerettes, 122';
  const city = 'Schaerbeek';
  const postCode = '1030';

  return (
    <section className="px-4 py-8 mx-auto bg-green-600 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="px-4 py-8 mx-auto max-w-screen-xl text-white sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full">
            <iframe
              width="600"
              height="450"
              src={mapUrl}
              style={{ border: '1px solid black' }}
            ></iframe>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Venez manger chez nous
            </h2>

            <p className="mt-4 text-gray-200">
              Ouvert du mardi au dimanche de 12h à 14h et de 18h à 22h
            </p>
            <p className="mt-4 text-gray-200">{street}</p>
            <p className="mt-2 text-gray-200">
              <span>{postCode}</span> {city}
            </p>
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
  );
};

export default ContactMap;
