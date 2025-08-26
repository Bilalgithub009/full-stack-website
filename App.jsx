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
import Signin from "./assets/pages/Signin";
import Signup from "./assets/pages/Signup";
import Footer from "./components/Footer";
// import FeedbackPopup from "./components/cardPopup";
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
          <Route path="/pages/signin" element={<Signin />} />
          <Route path="/pages/signup" element={<Signup />} />

          {/* Product Detail */}
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/CheckOutForm" element={<CheckoutForm />} />

        </Routes>
      </BrowserRouter>












      {/* 
      {
      id: 4,
      name: "Ladies Under Wear",
      frontImage: "https://m.media-amazon.com/images/I/61Oi-M7zftL._AC_UY1100_.jpg",
      hoverImage: "https://media.naheed.pk/catalog/product/cache/57044254b6ba66615c533891fd7cf70f/c/o/config-100676-1_1.jpg",
      description: "Elegant ladies’ underwear offering style, breathability, and support...",
      price: "PKR,500",
      oldprice: "PKR 800",
      rating: 5.0,
    },

    {
      id: 5,
      name: "Naker",
      frontImage: "https://m.media-amazon.com/images/I/51ef58uHevL._AC_UY1100_.jpg",
      hoverImage: "https://imagescdn.simons.ca/images/7757-25222-41-A1_2/6-ultra-comfortable-blue-boxer-brief.jpg?__=15",
      description: "Lightweight and flexible, tailored for all-day ease...",
      price: "PKR,500",
      oldprice: "PKR 800",
      rating: 4.2,
    },
    {
      id: 6,
      name: "Panties",
      frontImage: "https://nightynight.pk/cdn/shop/products/AF-115_-_I38A3868-20180630-15-06-09-Bridal_Panty_Clothing_Cotton_Panty_Ladies_Undergarments_Online_Panty_Undergarment_Women-https---dikhawa.pk_Online_Shopping_in_Pakistan-20180630-15-06-09--http_48f3e.jpg?v=1530595964",
      hoverImage: "https://m.media-amazon.com/images/I/81D-BtzZ9IL._AC_SL1500_.jpg",
      description: "Elegant ladies’ underwear with style and comfort...",
      price: "PKR,500",
      oldprice: "PKR 800",
      rating: 3.8,
    }, */}
    </>
  );
}

export default App;
