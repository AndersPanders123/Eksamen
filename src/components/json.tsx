import { InventoryItem } from "../types/inventory";

function Jsn({ data }: { data: InventoryItem[] | null }) {
  const handleButtonClick = (deviceName: string) => {
    const name = prompt("Skriv inn navnet ditt:");
    const tlf = prompt("Skriv inn telefonnummeret ditt:");
    if (name && tlf) {
      localStorage.setItem(
        name,
        JSON.stringify({
          name: name,
          tlf: tlf,
          device: deviceName,
        })
      );
      alert("Du har lånt !");
    }
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
                <p>
                  <span className="Kategori">Kategori: </span>
                  {item.Kategori}
                </p>
                <p>
                  <span className="Kategori">Beskrivelse: </span>
                  {item.Beskrivelse}
                </p>
                <p>
                  <span className="Kategori">Spesifikasjoner: </span>
                  {item.Spesifikasjoner}
                </p>
              </div>
              <button
                type="button"
                id="lånKnapp"
                onClick={() => handleButtonClick(item.Produsent)}
              >
                Lån
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Jsn;
