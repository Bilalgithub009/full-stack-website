import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Carousalha from "./components/Carousal";
import Testimonials from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import ContactSection from "./components/Contact";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import CheckoutForm from "./components/CheckOutForm";
import { AddToCart } from "./components/AddToCart";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "white",
        }}
      >
        <InfinitySpin visible={true} width="200" color="#007bff" />
      </div>
    );
  }

  return (
    <Routes>
      {/* Default Route */}
      <Route
        path="/"
        element={
          !isAuthenticated ? <Navigate to="/Signup" /> : <Navigate to="/home" />
        }
      />

      {/* Signup */}
      <Route path="/Signup" element={<Signup />} />

      {/* Signin */}
      <Route path="/Signin" element={<Signin />} />

      {/* Home (Protected Route) */}
      <Route
        path="/home"
        element={
          isAuthenticated ? (
            <>
              <Header />
              <Carousalha />
              <Hero />
              <Cards />
              <Testimonials />
              <ContactSection />
              <Footer />
            </>
          ) : (
            <Navigate to="/Signin" />
          )
        }
      />

      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/CheckOutForm" element={<CheckoutForm />} />
      <Route path="/addtocart" element={<AddToCart />} />
    </Routes>
  );
}

export default App;




