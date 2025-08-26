import Header from "./components/Header";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Carousalha from "./components/Carousal";
import Testimonials from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import ContactSection from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // ✅ FIXED
// import Signin from "./assets/pages/Signin";
// import Signup from "./assets/pages/Signup";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";
import CheckoutForm from "./components/CheckOutForm";

function App() {
  const [loading, setLoading] = useState(true);

  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "white",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={loaderContainerStyle}>
        <InfinitySpin
          visible={true}
          width="200"
          color="#007bff"

          ariaLabel="grid-loading"
        />
      </div>
    );
  }

  return (
    <>
      {/* <FeedbackPopup /> */}
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Carousalha />
                <Hero />
                <Cards />
                <Testimonials />
                <ContactSection />
                <Footer />
              </>
            }
          />

          {/* Auth Pages */}
          {/* <Route path="/pages/signin" element={<Signin />} /> */}
          {/* <Route path="/pages/signup" element={<Signup />} /> */}

          {/* Product Detail */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/CheckOutForm" element={<CheckoutForm />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;