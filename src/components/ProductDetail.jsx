import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import CheckoutForm from "./CheckOutForm";
import Header from "./Header";
import { useCart } from "@/context/cartcontext.jsx";

function ProductDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Boxer",
      frontImage: "https://m.media-amazon.com/images/I/717IJINcB2L._AC_UY1100_.jpg",
      hoverImage:
        "https://img01.ztat.net/article/spp-media-p1/8285e571c57e4f9cab4b66511c6a6948/bd7c142eed5248a3ba6e726c766a1ca4.jpg?imwidth=1800",
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
      price: "PKR 400",
      oldprice: "PKR 600",
      rating: 4.6,
    },
    {
      id: 3,
      name: "UnderJeans",
      frontImage: "https://cdn.aboutstatic.com/file/images/7fc945c7e70a5b63c2ed36571675f31c.jpg",
      hoverImage:
        "https://img01.ztat.net/article/spp-media-p1/216b2f6717dd485394356b87f49c1df9/a48d314afb0f4b639582116a9a81e670.jpg?imwidth=1800",
      description: "Slim-fit design that stays hidden and feels like a second skin...",
      price: "PKR 300",
      oldprice: "PKR 450",
      rating: 4.9,
    },

    {
      id: 4,
      name: "Ladies Under Wear",
      frontImage: "https://m.media-amazon.com/images/I/61Oi-M7zftL._AC_UY1100_.jpg",
      hoverImage: "https://media.naheed.pk/catalog/product/cache/57044254b6ba66615c533891fd7cf70f/c/o/config-100676-1_1.jpg",
      description: "Elegant ladies’ underwear offering style, breathability, and support...",
      price: "Rs 250",
      oldprice: "PKR 400",
      rating: 5.0,
    },

    {
      id: 5,
      name: "Naker",
      frontImage: "https://m.media-amazon.com/images/I/51ef58uHevL._AC_UY1100_.jpg",
      hoverImage: "https://imagescdn.simons.ca/images/7757-25222-41-A1_2/6-ultra-comfortable-blue-boxer-brief.jpg?__=15",
      description: "Lightweight and flexible, tailored for all-day ease...",
      price: "Rs 600",
      oldprice: "PKR 800",
      rating: 4.2,
    },
    {
      id: 6,
      name: "Panties",
      frontImage: "https://nightynight.pk/cdn/shop/products/AF-115_-_I38A3868-20180630-15-06-09-Bridal_Panty_Clothing_Cotton_Panty_Ladies_Undergarments_Online_Panty_Undergarment_Women-https---dikhawa.pk_Online_Shopping_in_Pakistan-20180630-15-06-09--http_48f3e.jpg?v=1530595964",
      hoverImage: "https://m.media-amazon.com/images/I/81D-BtzZ9IL._AC_SL1500_.jpg",
      description: "Elegant ladies’ underwear with style and comfort...",
      price: "Rs 150",
      oldprice: "PKR 250",
      rating: 3.8,
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const increase = () => setQuantity((prev) => prev + 1);

  const handleCheckout = () => {
    addToCart(product, quantity);
    setIsModalOpen(true);
  };



  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg overflow-hidden p-6 lg:p-10">

            {/* Left Side - Product Image */}
            <div className="relative group rounded-xl overflow-hidden">
              <img
                src={product.frontImage}
                alt={product.name}
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src={product.hoverImage}
                alt="Hover"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 capitalize">
                  {product.name}
                </h1>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold text-red-500">{product.price}</span>
                  <span className="text-lg line-through text-gray-500">{product.oldprice}</span>
                </div>

                {/* Size */}
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Size</label>
                  <select className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>

                {/* Color */}
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Color</label>
                  <select className="w-full border rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500">
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Navy Blue</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <label className="block font-semibold mb-2">Quantity</label>
                  <div className="flex items-center border rounded-lg w-36 justify-between px-3 py-2">
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

                {/* Buttons */}
                <div className="flex gap-5">
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition duration-300 shadow-md"
                  >
                    Checkout
                  </button>

                  <Link
                    to="/"
                    className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                  >
                    Go Back
                  </Link>
                </div>

                <CheckoutForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
