import { useEffect, useState } from "react";

const GetLocalStorage: React.FC = () => {
  const [localStorageData, setLocalStorageData] = useState<{
    [key: string]: any;
  }>({});

  useEffect(() => {
    loadLocalStorageData();
  }, []);

  const loadLocalStorageData = () => {
    let data: { [key: string]: any } = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      const item = localStorage.getItem(key);
      data[key] = JSON.parse(item as string);
    }
    setLocalStorageData(data);
  };

  const handleRemove = (key: string) => {
    localStorage.removeItem(key);
    loadLocalStorageData(); // Reload local storage data after removing an item
  };

  return (
    <div>
      <div>
        {Object.entries(localStorageData).map(([key, value], index) => (
          <div className="lånt" key={index}>
            <h2>{key}</h2>
            {Object.entries(value).map(([subKey, subValue], subIndex) => (
              <p key={subIndex}>
                {subKey}: {subValue}
              </p>
            ))}
            <button className="removeKnapp" onClick={() => handleRemove(key)}>
              Lever
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetLocalStorage;
