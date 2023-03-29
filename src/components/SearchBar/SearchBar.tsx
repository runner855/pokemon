import React from "react";
import "../SearchBar/SearchBar.css";

type PokemonSearchProps = {
  value: string;
  setValue: (value: string) => void;
};

export const SearchBar = ({ value, setValue }: PokemonSearchProps) => {
  return (
    <div className="SearchBar_container">
      <input
        type="search"
        placeholder="Search Pokemon..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
