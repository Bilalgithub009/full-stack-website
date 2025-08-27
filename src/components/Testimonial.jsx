import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonials = [
    {
      name: "HOLDEN CAULFIELD",
      position: "Senior Product Designer",
      image:
        "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60",
      message:
        "SK Garments provides high-quality underwear and boxers. I loved the fabric and stitching!",
    },
    {
      name: "ALPER KAMU",
      position: "UI Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITaklCPL8iGBhamjnE4bKejC5qLFAE4yOjw&s",
      message:
        "I trust SK Garments for all my innerwear needs. Their products are stylish and durable.",
    },
    {
      name: "HENRY LETHAM",
      position: "CTO",
      image:
        "https://img.freepik.com/premium-photo/portrait-confident-caucasian-male-teacher-classroom_1158146-4364.jpg?semt=ais_hybrid&w=740",
      message:
        "Amazing service and products. I highly recommend SK Garments to everyone.",
    },
  ];

  return (
    <div className="bg-white py-8 px-">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-6">
          What People Say About Us
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Trusted by real users of{" "}
          <span className="font-semibold text-blue-700">SK Garments</span>
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 max-w-md mx-auto transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-blue-200 object-cover shadow-sm"
                />
                <svg
                  className="w-8 h-8 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6A5.99 5.99 0 002 12v6h6v-6H5.09a4 4 0 014.08-6H7.17zm10 0a5.99 5.99 0 00-5.17 6v6h6v-6h-2.91a4 4 0 014.08-6h-2z" />
                </svg>
                <p className="text-gray-700 text-base md:text-lg italic leading-relaxed max-w-sm">
                  “{item.message}”
                </p>
                <div>
                  <h3 className="text-blue-900 font-bold text-base md:text-lg uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;