// src/SearchBox.tsx
import React, { useState, ChangeEvent, useMemo } from "react";
import { InventoryItem } from "../types/inventory";

type props = {
  data: InventoryItem[] | null;
  setData: React.Dispatch<React.SetStateAction<InventoryItem[] | null>>;
};

const SearchBox: React.FC<props> = ({ data, setData }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useMemo(() => {
    const filteredItems: InventoryItem[] | undefined =
      data &&
      data.filter(
        (item: InventoryItem) =>
          item.Produsent.toLowerCase().includes(
            searchTerm?.toLowerCase() || "".toLowerCase()
          ) ||
          item.Kategori.toLowerCase().includes(
            searchTerm?.toLowerCase() || "".toLowerCase()
          ) ||
          item.Beskrivelse.toLowerCase().includes(
            searchTerm?.toLowerCase() || "".toLowerCase()
          ) ||
          item.Spesifikasjoner.toLowerCase().includes(
            searchTerm?.toLowerCase() || "".toLowerCase()
          )
      );

    setData(filteredItems);
  }, [searchTerm]);

  return (
    <div className="search-box">
      <input
        id="søkefelt"
        type="text"
        placeholder="Søk etter utstyr"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
