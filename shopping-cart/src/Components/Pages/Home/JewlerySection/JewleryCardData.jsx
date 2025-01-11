// export const jewleryCardData = [
//     {
//       id: 1,
//       name: "Lippie Pencil",
//       price: 29.99,
//       image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531093614"
//     },
//     {
//       id: 2,
//       name: "Blotted Lip",
//       price: 34.99,
//       image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336"
//     },
//     {
//       id: 3,
//       name: "Lippie Stix",
//       price: 39.99,
//       image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651"
//     },
//     {
//       id: 4,
//       name: "No Filter Foundation",
//       price: 24.99,
//       image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/045/original/open-uri20180708-4-4bvqii?1531074237"
//     },
//     {
//       id: 5,
//       name: "Lipstick",
//       price: 19.99,
//       image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/044/original/data?1531071233"
//     },
//     {
//       id: 6,
//       name: "Serum Foundation",
//       price: 27.99,
//       image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/043/original/open-uri20180706-4-nszgw9?1530919194"
//     },
//     {
//       id: 7,
//       name: "Coverage Foundation",
//       price: 32.99,
//       image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/042/original/open-uri20180706-4-1e74943?1530916234"
//     }
//   ];
//   import { useEffect, useState } from "react";

export const jewleryCardata = async () => {
        try{
            let url = 'https://dummyjson.com/products';
            let response = await fetch(url);
            if(!response.ok){
                throw new Error(`Error occurred: ${response.status}`);
            }
            let data = await response.json();
            console.log(data);
            // setJewleryData(data);
            // setLoading(false);
            
        } catch(error){
            console.error("Error fetching data:", error);
            // setError(error);
        }
    }