import { useEffect, useState } from "react";
import { InventoryItem } from "../types/inventory";

function Jsn() {
  const [data, setData] = useState<InventoryItem[] | null>(null);

  useEffect(() => {
    fetch("/inventory.json") // Replace "/path/to/inventory.json" with the correct path to your inventory.json file
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      {data === null && <p>Loading...</p>}

      {data &&
        data.map((item, index: number) => {
          return (
            <div key={index}>
              <h2>{item.Produsent}</h2>
              <p>{item.Kategori}</p>
              <p>{item.Beskrivelse}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Jsn;
