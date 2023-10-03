import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from './Icons';
import { Drink } from '../src/db/schema';

export default function DrinkMenuItem({
  index,
  drinks,
  title,
  ingredients,
  openAccordion,
  handleAccordionClick
}: {
  index: number;
  drinks: Drink[];
  title: string;
  ingredients?: string[];
  openAccordion: number | null;
  handleAccordionClick: (index: number) => void;
}) {
  const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>(drinks);
  const [drinkTypeSelector, setTypeDrinkSelector] = useState<string>('');
  const drinkTypes = [
    'Vin Blanc',
    'Vin Rosé',
    'Vin Rouge',
    'Sans alcool',
    'Liqueur',
    'Bière',
    'Apéritif'
  ].sort((a, b) => a.localeCompare(b));
  return (
    <>
      <h2
        onClick={() => {
          handleAccordionClick(index);
          setFilteredDrinks(drinks);
        }}
        className="flex justify-center items-center pt-2 text-3xl font-extrabold text-center rounded-lg border-none cursor-pointer hover:bg-gray-100"
      >
        Boissons
        <span className="pl-2">
          {openAccordion === index ? (
            <IconChevronDown className="text-green-600" />
          ) : (
            <IconChevronUp className="text-green-600" />
          )}
        </span>
      </h2>
      <ul
        className={` ${
          openAccordion === index ? 'flex' : 'hidden'
        } flex flex-col gap-4 p-5 `}
      >
        <li className="grid grid-cols-2 gap-2 pt-2 text-sm sm:grid-cols-8">
          {drinkTypes?.map((drinkType, index) => {
            return (
              <h4
                onClick={() => {
                  if (drinkTypeSelector === drinkType) {
                    setTypeDrinkSelector('');
                    setFilteredDrinks(drinks);
                  } else {
                    setTypeDrinkSelector(drinkType);
                    setFilteredDrinks(
                      drinks
                        .filter(
                          (drinks) =>
                            (drinks.typeDrink as unknown as string) ===
                            drinkType
                        )
                        .sort((a, b) => a.name.localeCompare(b.name))
                    );
                  }
                }}
                className={`p-2 text-center text-white rounded-lg cursor-pointer hover:bg-green-700 active:bg-green-700 ${
                  drinkTypeSelector == drinkType
                    ? 'bg-green-700'
                    : 'bg-slate-500'
                } `}
                key={drinkType}
              >
                {drinkType}
              </h4>
            );
          })}
        </li>
        {!!filteredDrinks?.length &&
          filteredDrinks?.map((drink, index) => {
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
    </>
  );
}
