import { useEffect, useState } from "react";
import Header from "./components/header";
import Jsn from "./components/json";
import { InventoryItem } from "./types/inventory";
import SearchBox from "./components/searchBox";

function App() {
  const [data, setData] = useState<InventoryItem[] | null>(null);
  const [filteredData, setFilteredData] = useState<InventoryItem[] | null>(
    data
  );

  useEffect(() => {
    fetch("/inventory.json") // Replace "/path/to/inventory.json" with the correct path to your inventory.json file
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <SearchBox data={data} setData={setFilteredData} />
      <Jsn data={filteredData} />
    </div>
  );
}

export default App;
