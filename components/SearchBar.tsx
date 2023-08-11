"use client";

import { SearchButton, SearchManufacturer } from ".";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManuFacturer} />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
    </form>
  );
};

export default SearchBar;
