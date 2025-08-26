import Header from "./components/Header";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Carousalha from "./components/Carousal";
import Testimonials from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { InfinitySpin } from 'react-loader-spinner';
import ContactSection from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Footer from "./components/Footer";
// import FeedbackPopup from "./components/cardPopup";



function App() {

  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "white",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timing based on real loading

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

      {/* <FeedbackPopup/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />



        </Routes>

      </BrowserRouter>




      <div className="App">
        {/* 🧾 Your full SK Garment website goes here */}
        <Header />

        <Carousalha />
        <Hero />
        <Cards />
        <Testimonials />
        <ContactSection />
        <Footer />
      </div>




















    </>
  )
}

export default App
