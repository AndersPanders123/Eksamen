import { InventoryItem } from "../types/inventory";

function Jsn({ data }: { data: InventoryItem[] | null }) {
  const handleButtonClick = () => {
    const name = prompt('Skriv inn navnet ditt:');
    alert('Du har lånt !');
    console.log(name); 
  };

  return (
    <div className="utlån">
      {data === null && <p>Loading...</p>}

      {data &&
        data.map((item, index: number) => {
          return (
            <div key={index} className="box">
              <h2>{item.Produsent}</h2>
              <div>
                <p><span className="Kategori">Kategori: </span>{item.Kategori}</p>
                <p><span className="Kategori">Beskrivelse: </span>{item.Beskrivelse}</p>
                <p><span className="Kategori">Spesifikasjoner: </span>{item.Spesifikasjoner}</p>
              </div>
              <button type="button" id="lånKnapp" onClick={handleButtonClick}>Lån</button>
            </div>
          );
        })}
    </div>
  );
}

export default Jsn;