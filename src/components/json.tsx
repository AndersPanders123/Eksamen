import { InventoryItem } from "../types/inventory";

function Jsn({ data }: { data: InventoryItem[] | null }) {
  return (
    <div className="utlån">
      {data === null && <p>Loading...</p>}

      {data &&
        data.map((item, index: number) => {
          return (
            <div key={index} className="box">
              <h2>{item.Produsent}</h2>
              <p> Kategori {item.Kategori}</p>
              <p>{item.Beskrivelse}</p>
              <p>{item.Spesifikasjoner}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Jsn;
