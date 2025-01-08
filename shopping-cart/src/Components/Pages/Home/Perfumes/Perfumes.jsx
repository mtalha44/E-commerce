import { useEffect, useState } from "react";

export const Perfumes = () => {
  const [perfumesData, setPerfumesData] = useState(null);
  const [loadApi, setLoadApi] = useState(true);
  const [errorApi, setErrorApi] = useState(null);

  const handleApi = async () => {
    try {
      const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error occurred: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setPerfumesData(data.slice( 0 , 6));
      setLoadApi(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorApi(error.message); // Set the error message
      setLoadApi(false); // Ensure loading stops
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  if (loadApi) {
    return <h1>Loading...</h1>;
  }

  if (errorApi) {
    return <p>Error: {errorApi}</p>;
  }

  return (
    <section className="perfumes-container" id="perfumes-container">
      <div className="perfumes-title">
        <h1>Beauty and Fragrance</h1>
      </div>
      {perfumesData && perfumesData.length > 0 ? (
        perfumesData.map((curdata) => (
          <ul key={curdata.id}>
            <li>
              <img src={curdata.image_link || placeholder.jpg } alt="nhi mili" />
              <h3>{curdata.name}</h3>
              <p>Brand: {`${curdata.brand || "Unknown" }`}</p>
              <p>Price: {`${curdata.price  ||  "5" }$`}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>No perfumes found.</p>
      )}
    </section>
  );
};
