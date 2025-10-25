import { useCart } from "@/context/cartcontext.jsx";
import Header from "./Header";
import { ArrowLeft } from "lucide-react"; // ← icon import
import { useNavigate } from "react-router-dom";

export default function AddToCart() {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    return (
        <>
            <Header />

            {/* 🔙 Back Button Section */}
            <div className="max-w-6xl mx-auto mt-6 px-4">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition font-semibold"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>
            </div>

            <section className="bg-gray-50 py-10 px-4 lg:px-12 min-h-screen">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
                    <h2 className="text-4xl font-bold mb-10 text-gray-900 border-b pb-4">
                        🛒 Your Shopping Cart
                    </h2>

                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="group border rounded-2xl p-5 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white via-gray-50 to-gray-100"
                                    >
                                        {/* Product Image */}
                                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shadow-md">
                                            <img
                                                src={item.frontImage}
                                                alt={item.name}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex flex-col justify-between flex-1">
                                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                                                {item.description}
                                            </p>

                                            {/* Price Section */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <p className="text-gray-400 line-through text-lg">
                                                    PKR {(item.originalPrice || (parseInt(item.price.replace("PKR ", "")) + 300))}
                                                </p>
                                                <p className="text-red-500 font-bold text-2xl">
                                                    {item.price}
                                                </p>
                                            </div>

                                            {/* Quantity */}
                                            <p className="text-gray-700 font-medium">
                                                Quantity:{" "}
                                                <span className="font-bold text-indigo-600">{item.quantity}</span>
                                            </p>

                                            {/* Subtotal + Delete Button */}
                                            <div className="flex justify-between items-center mt-4">
                                                <p className="text-gray-900 font-semibold">
                                                    Subtotal:{" "}
                                                    <span className="text-green-600">
                                                        PKR {parseInt(item.price.replace("PKR ", "")) * item.quantity}
                                                    </span>
                                                </p>

                                                <button
                                                    onClick={() => {
                                                        removeFromCart(item.id);
                                                        alert("Item removed from cart");
                                                    }}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition shadow-md"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary Section */}
                            <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="text-lg text-gray-700">
                                    <span className="font-semibold text-gray-900">Total Items:</span>{" "}
                                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                </div>

                                <div className="text-2xl font-bold text-gray-900">
                                    Total:{" "}
                                    <span className="text-green-600">
                                        PKR{" "}
                                        {cartItems.reduce(
                                            (total, item) =>
                                                total + parseInt(item.price.replace("PKR ", "")) * item.quantity,
                                            0
                                        )}
                                    </span>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={clearCart}
                                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md"
                                    >
                                        Clear Cart
                                    </button>
                                    <button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-md"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
