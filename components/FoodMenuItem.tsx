import { useState } from 'react';
import {
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  VegetarianIcon
} from './Icons';
import { Food } from '../src/db/schema';
import SearchBar from './SearchBar';

export default function FoodMenuItem({
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
}) {
  const [filteredFoods, setFilteredFoods] = useState<Food[]>(foods);
  const [foodIngredientSelector, setFoodIngredientSelector] =
    useState<string>('');

  const handleFilterFood = (el: string) => {
    if (foodIngredientSelector?.includes(el)) {
      setFilteredFoods(foods);
      setFoodIngredientSelector(el);
    } else if (el.includes('vég') || el.includes('veg')) {
      let newFood = foodIngredientSelector;
      setFoodIngredientSelector(el);
      setFilteredFoods(foods.filter((foods) => foods.veg));
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
          <li className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-8">
            <SearchBar
              valueString={foodIngredientSelector}
              filterByValueFunction={handleFilterFood}
            />

            {ingredients?.map((el: string, index: number) => {
              return (
                <h4
                  onClick={() => handleFilterFood(el)}
                  className={`p-2 text-center text-sm text-white rounded-lg cursor-pointer hover:bg-green-700 ${
                    foodIngredientSelector === el
                      ? 'bg-green-700 active:bg-green-700 '
                      : 'bg-slate-500'
                  } `}
                  key={el + index}
                >
                  {foodIngredientSelector === el ? (
                    <span>
                      {el}
                      <span className="pl-2 font-extrabold">
                        {filteredFoods.length}
                      </span>
                    </span>
                  ) : (
                    <span>{el}</span>
                  )}
                </h4>
              );
            })}

            {/* Vegetarian selector  */}
            <h4
              onClick={() => {
                if (foodIngredientSelector === 'végétarian') {
                  setFoodIngredientSelector('');
                  setFilteredFoods(foods);
                } else {
                  setFoodIngredientSelector('végétarien');
                  setFilteredFoods(foods.filter((el) => el?.veg));
                }
              }}
              className={`p-2 flex justify-center  text-sm text-white rounded-lg cursor-pointer hover:bg-green-700 active:bg-green-700 ${
                foodIngredientSelector === 'végétarien'
                  ? 'bg-green-700'
                  : 'bg-slate-500'
              } `}
            >
              <VegetarianIcon />
              <span className="pl-2">végétarien</span>
            </h4>
          </li>
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
                      title="végétarien"
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
}
