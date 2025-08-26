import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import CheckoutForm from "./CheckOutForm";

function ProductDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Boxer",
      frontImage: "https://m.media-amazon.com/images/I/717IJINcB2L._AC_UY1100_.jpg",
      hoverImage: "https://img01.ztat.net/article/spp-media-p1/8285e571c57e4f9cab4b66511c6a6948/bd7c142eed5248a3ba6e726c766a1ca4.jpg?imwidth=1800",
      description: "Breathable and stretchable boxers crafted for ultimate comfort...",
      price: "PKR 500",
      oldprice: "PKR 800",
      rating: 4.0,
    },
    {
      id: 2,
      name: "Jeans",
      frontImage: "https://static-01.daraz.pk/p/a1a97d96abf7722a017fb1ee3c88739d.jpg",
      hoverImage: "https://i.ebayimg.com/images/g/T2sAAOSwogVl1gnv/s-l1200.jpg",
      description: "Stay sleek and supported with our underjeans...",
      price: "PKR 500",
      oldprice: "PKR 800",
      rating: 4.6,
    },
    {
      id: 3,
      name: "UnderJeans",
      frontImage: "https://cdn.aboutstatic.com/file/images/7fc945c7e70a5b63c2ed36571675f31c.jpg",
      hoverImage: "https://img01.ztat.net/article/spp-media-p1/216b2f6717dd485394356b87f49c1df9/a48d314afb0f4b639582116a9a81e670.jpg?imwidth=1800",
      description: "Slim-fit design that stays hidden and feels like a second skin...",
      price: "PKR 500",
      oldprice: "PKR 800",
      rating: 4.9,
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (!product) {
    return <NotFound />;
  }

  return (
    <section className="text-gray-800 body-font bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl overflow-hidden p-6">

          {/* Product Image */}
          <div className="relative group">
            <img
              src={product.frontImage}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src={product.hoverImage}
              alt="Hover"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3 capitalize">{product.name}</h1>
              <p className="text-black leading-relaxed mb-5">{product.description}</p>

              {/* Price Section */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-red-400">{product.price}</span>
                <span className="text-xl line-through text-gray-500">{product.oldprice}</span>
              </div>

              {/* Size Options */}
              <div className="mb-4">
                <label className="block font-semibold mb-1">Size</label>
                <select className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>

              {/* Color Options */}
              <div className="mb-4">
                <label className="block font-semibold mb-1">Color</label>
                <select className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500">
                  <option>Black</option>
                  <option>Blue</option>
                  <option>Navy Blue</option>
                </select>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block font-semibold mb-1">Quantity</label>
                <div className="flex items-center border rounded-lg w-32 justify-between px-3 py-2">
                  <button
                    onClick={decrease}
                    className="px-2 text-xl font-bold text-gray-600 hover:text-red-600"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={increase}
                    className="px-2 text-xl font-bold text-gray-600 hover:text-green-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-green-600 transition duration-300 shadow-md"
              >
                Checkout
              </button>
              <CheckoutForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />

              {/* Go Home */}
              <Link
                to="/"
                className="block w-full text-center mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
