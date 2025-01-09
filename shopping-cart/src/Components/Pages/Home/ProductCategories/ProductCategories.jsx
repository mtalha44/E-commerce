import React from "react";


const productImages = [
  {
    src: "/images/sport-brand-img.jpg",
    title: "Accessories",
    description: "Sports and lifestyle accessories.",
  },
  {
    src: "/images/suitcase-brand-img.jpg",
    title: "Suitcases",
    description: "Durable and stylish suitcases.",
  },
  {
    src: "/images/watches-brand-img.jpg",
    title: "Watches",
    description: "Elegant watches for every occasion.",
  },
  {
    src: "/images/glasses-brand-img.jpg",
    title: "Glasses",
    description: "Trendy and comfortable eyewear.",
  },
  {
    src: "/images/shoes-brand-img.jpg",
    title: "Shoes",
    description: "Stylish and comfortable footwear.",
  },
  {
    src: "/images/furniture-brand-img.jpg",
    title: "Furniture",
    description: "Modern and functional furniture.",
  },
  {
    src: "/images/studio-brand-img.jpg",
    title: "Studio",
    description: "Premium studio equipment.",
  },
];

export const ProductCategories = () => {
  return (
    <section className="product-categories flex-column" id="product-categories">
      <div className="product-categories-header">
        <h1 className="product-categories-title">Explore Our Product Categories</h1>
        <p>Discover a wide range of top-quality products from trusted brands.</p>
      </div>
      <div className="product-categories-grid">
        {productImages.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="image-container">
              <img src={item.src} alt={item.title} />
              <div className="grid-overlay">
                <h4 style={{textTransform: "uppercase"}}>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
