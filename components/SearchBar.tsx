import React from 'react';
import { IconSearch } from './Icons';

const SearchBar = ({
  valueString,
  filterByValueFunction,
  className
}: {
  valueString: string;
  filterByValueFunction: (value: string) => void;
  className?: string;
}) => {
  return (
    <div
      className={`flex col-span-2 justify-between items-center p-2 text-sm text-center text-white rounded-lg cursor-pointer ${className} hover:bg-green-700 active:bg-green-700 bg-slate-500`}
    >
      <input
        type="text"
        placeholder="Recherche"
        value={valueString.toLocaleLowerCase()}
        onChange={(e) => filterByValueFunction(e.target.value)}
        className="pl-2 bg-transparent outline-none"
      />
      <IconSearch className="text-white" />
    </div>
  );
};

export default SearchBar;
