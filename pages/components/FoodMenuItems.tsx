import { useState } from 'react';
import { Drink, Food } from '../../src/db/schema';
import { IconChevronDown, IconChevronUp, VegetarianIcon } from './Icons';

export const FoodMenuItem = ({
  index,
  foods,
  title,
  ingredients,
  openAccordion,
  handleAccordionClick
}: {
  index: number;
  foods: Food[];
  title: string;
  ingredients?: string[];
  openAccordion: number | null;
  handleAccordionClick: (index: number) => void;
}) => {
  const [filteredFoods, setFilteredFoods] = useState<Food[]>(foods);
  const [foodIngredientSelector, setFoodIngredientSelector] =
    useState<string>('');

  const handleFilterFood = (el: string) => {
    if (foodIngredientSelector?.includes(el)) {
      console.log(el, foodIngredientSelector);
      setFoodIngredientSelector('');
      setFilteredFoods(foods);
    } else {
      let newFood = foodIngredientSelector;
      setFoodIngredientSelector(el);
      setFilteredFoods(
        foods.filter((foods) =>
          (foods.ingredients as unknown as string).includes(el)
        )
      );
    }
  };

  return (
    <div>
      <h2
        onClick={() => handleAccordionClick(index)}
        className="flex justify-center items-center pt-2 text-3xl font-extrabold text-center capitalize rounded-lg border-none cursor-pointer hover:bg-gray-100"
      >
        {title}
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
        {/* Ingredients selectors  */}
        {!!ingredients?.length && (
          <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-8">
            {ingredients?.map((el: string, index: number) => {
              return (
                <h4
                  onClick={() => handleFilterFood(el)}
                  className={`p-2 text-center text-sm text-white rounded-lg cursor-pointer hover:bg-green-700 active:bg-green-700 ${
                    foodIngredientSelector === el
                      ? 'bg-green-600'
                      : 'bg-slate-500'
                  } `}
                  key={el + index}
                >
                  {el}
                </h4>
              );
            })}

            {/* Vegetarian selector  */}
            <h4
              onClick={() => {
                if (foodIngredientSelector === 'Vegetarian') {
                  setFoodIngredientSelector('');
                  setFilteredFoods(foods);
                } else {
                  setFoodIngredientSelector('Vegetarian');
                  setFilteredFoods(foods.filter((el) => el?.veg));
                }
              }}
              className={`p-2 flex justify-center  text-sm text-white rounded-lg cursor-pointer hover:bg-green-700 active:bg-green-700 ${
                foodIngredientSelector === 'Vegetarian'
                  ? 'bg-green-600'
                  : 'bg-slate-500'
              } `}
            >
              <VegetarianIcon />
              <span className="pl-2">Végétarien</span>
            </h4>
          </div>
        )}
        {!!filteredFoods?.length &&
          filteredFoods?.map((food, index) => (
            <li
              key={index}
              className="flex flex-col p-4 bg-gray-100 rounded-lg border-none shadow-lg gap-500"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="font-bold">{food.name}</h3>
                  <p>{food.ingredients}</p>
                </div>
                <div className="flex flex-col">
                  <span>{food.price}€</span>
                  {food?.veg && (
                    <p
                      className="text-green-600 text-extrabold"
                      title="Vegetarian"
                    >
                      <VegetarianIcon className="color-green-600" />
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const DrinkMenuItem = ({
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
}) => {
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
        <div className="grid grid-cols-2 gap-2 pt-2 text-sm sm:grid-cols-8">
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
                    ? 'bg-green-600'
                    : 'bg-slate-500'
                } `}
                key={drinkType}
              >
                {drinkType}
              </h4>
            );
          })}
        </div>
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
};