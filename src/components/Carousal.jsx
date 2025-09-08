import { Carousel } from "antd";
import images2 from "../assets/image1.jpg";
// import image3 from "../assets/image2.jpg";

const carouselItems = [
  {
    image: "https://img.freepik.com/premium-photo/men-s-underwear-store-cotton-men-s-briefs_130265-8603.jpg",
    title: "Premium Men's Boxers",
    description: "Experience unmatched comfort and style with our latest collection."
  },
  {
    image: "https://t3.ftcdn.net/jpg/03/55/08/24/360_F_355082414_20Im18C0AVryxRxyvIfgwhZVX3falxVd.jpg",
    title: "Under Jeans Essentials",
    description: "Seamless fit and breathable fabric for everyday wear."
  },
  {
    image: "https://m.media-amazon.com/images/I/71trFkIrNaL.jpg",
    title: "Ladies' Underwear",
    description: "Elegance and comfort combined in our new women's line."
  }
];

function Carousalha() {
  return (
    <div id="home" className="relative w-full mx-auto overflow-hidden shadow-xl bg-white m-0 p-0">
      <Carousel autoplay dotPosition="bottom">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.image}
              alt={`slide-${index}`}
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center items-center text-white px-6">
              <h2 className="text-2xl md:text-5xl font-extrabold bg-black/10 mb-3 drop-shadow-lg">
                {item.title}
              </h2>
              <p className="text-sm md:text-lg max-w-[700px] mb-5 bg-black/50 opacity-90 text-center">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>

  );
}

export default Carousalha;