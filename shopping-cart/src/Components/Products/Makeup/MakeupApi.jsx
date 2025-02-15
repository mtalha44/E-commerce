// export const makeupApi = async () => {
//       try {
//         const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
//         const response = await fetch(url);
  
//         if (!response.ok) {
//           throw new Error(`Error occurred: ${response.status}`);
//         }
  
//         const data = await response.json();
//         console.log(data);
//         // localStorage.setItem("makeupData", JSON.stringify(data));
//         console.log(data.slice(0, 6));
//         return data.slice(0, 6);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//       }
// };

// export const makeupApi = async () => {
//     try {
//       const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
//       const response = await fetch(url);
  
//       if (!response.ok) {
//         throw new Error(`Error occurred: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log(data);
//       return data.slice(0, 6);  // Returning only the first 6 items
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw new Error("Failed to fetch makeup data");
//     }
// };
  


// import { useEffect, useState } from "react";
// import { Perfumes } from "../../Pages/Home/Perfumes/Perfumes";

// export const MakeupApi = () => {
//   const [ makeupData, setMakeupData] = useState(null);
//   const [loadApi, setLoadApi] = useState(true);
//   const [errorApi, setErrorApi] = useState(null);

//   const handleApi = async () => {
//     const cachedData = localStorage.getItem("makeupData");
//     if (cachedData) {
//       setMakeupData(JSON.parse(cachedData));
//       setLoadApi(false);
//       return;
//     }
//       try {
//         const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
//         const response = await fetch(url);
  
//         if (!response.ok) {
//           throw new Error(`Error occurred: ${response.status}`);
//         }
  
//         const data = await response.json();
//         console.log(data);
//         localStorage.setItem("makeupData", JSON.stringify(data));
//         setMakeupData(data);
//         setLoadApi(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setErrorApi(error.message); // Set the error message
//         setLoadApi(false); // Ensure loading stops
//       }
//     };
  
//     useEffect(() => {
//       handleApi();
//     }, []);
  
//     if (loadApi) {
//       return (
//         <div className="skeleton-container">
//           {Array(5).fill(0).map((_, index) => (
//             <div key={index} className="skeleton-card"></div>
//           ))}
//         </div>
//       );
//     }
  
//     if (errorApi) {
//       return <p>Error: {errorApi} </p>;
//     }
//     return (
//         <Perfumes makeupData={makeupData.slice(0, 6)} />
//     )
// }