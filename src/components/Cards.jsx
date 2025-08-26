import React, { useState } from "react";

const products = [
  {
    name: "Boxer",
    frontImage: "https://m.media-amazon.com/images/I/717IJINcB2L._AC_UY1100_.jpg",
    hoverImage: "https://img01.ztat.net/article/spp-media-p1/8285e571c57e4f9cab4b66511c6a6948/bd7c142eed5248a3ba6e726c766a1ca4.jpg?imwidth=1800",
    description: "Breathable and stretchable boxers crafted for ultimate comfort...",
    price: "Rs 500",
    rating: 4.0,
  },
  {
    name: "Jeans",
    frontImage: "https://static-01.daraz.pk/p/a1a97d96abf7722a017fb1ee3c88739d.jpg",
    hoverImage: "https://i.ebayimg.com/images/g/T2sAAOSwogVl1gnv/s-l1200.jpg",
    description: "Stay sleek and supported with our underjeans...",
    price: "Rs 500",
    rating: 4.6,
  },
  {
    name: "UnderJeans",
    frontImage: "https://cdn.aboutstatic.com/file/images/7fc945c7e70a5b63c2ed36571675f31c.jpg",
    hoverImage: "https://img01.ztat.net/article/spp-media-p1/216b2f6717dd485394356b87f49c1df9/a48d314afb0f4b639582116a9a81e670.jpg?imwidth=1800",
    description: "Slim-fit design that stays hidden and feels like a second skin...",
    price: "Rs 500",
    rating: 4.9,
  },
  {
    name: "Ladies Under Wear",
    frontImage: "https://m.media-amazon.com/images/I/61Oi-M7zftL._AC_UY1100_.jpg",
    hoverImage: "https://media.naheed.pk/catalog/product/cache/57044254b6ba66615c533891fd7cf70f/c/o/config-100676-1_1.jpg",
    description: "Elegant ladies’ underwear offering style, breathability, and support...",
    price: "Rs 500",
    rating: 5.0,
  },

  {
    name: "Naker",
    frontImage: "https://m.media-amazon.com/images/I/51ef58uHevL._AC_UY1100_.jpg",
    hoverImage: "https://imagescdn.simons.ca/images/7757-25222-41-A1_2/6-ultra-comfortable-blue-boxer-brief.jpg?__=15",
    description: "Lightweight and flexible, tailored for all-day ease...",
    price: "Rs 500",
    rating: 4.2,
  },
  {
    name: "Panties",
    frontImage: "https://nightynight.pk/cdn/shop/products/AF-115_-_I38A3868-20180630-15-06-09-Bridal_Panty_Clothing_Cotton_Panty_Ladies_Undergarments_Online_Panty_Undergarment_Women-https---dikhawa.pk_Online_Shopping_in_Pakistan-20180630-15-06-09--http_48f3e.jpg?v=1530595964",
    hoverImage: "https://m.media-amazon.com/images/I/81D-BtzZ9IL._AC_SL1500_.jpg",
    description: "Elegant ladies’ underwear with style and comfort...",
    price: "Rs 500",
    rating: 3.8,
  },


];

export default function Cards() {
  const [showAll, setShowAll] = useState(false);

  const handleWhatsApp = (productName) => {
    const phoneNumber = "+923190266227";
    const message = `Hello, I am interested in your product: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <div className="p-6">
      <h1 className="text-4xl text-center font-bold mb-4">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-lg p-4 text-center group relative overflow-hidden"
          >
            {/* Image wrapper */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              {/* Front Image */}
              <img
                src={product.frontImage}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Hover Image */}
              <img
                src={product.hoverImage}
                alt={product.name}
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>

            <h2 className="text-2xl font-bold mt-3">{product.name}</h2>
            <p className="text-black text-lg font-normal capitalize mb-3">
              {product.description}
            </p>
            <button
              onClick={() => handleWhatsApp(product.name)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Order on WhatsApp
            </button>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
