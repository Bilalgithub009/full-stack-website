import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0  bg-blue-300 rounded-full"></div>
      <div className="absolute bottom-0 right-0 bg-indigo-300 rounded-full  z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
        // initial={{ opacity: 0, y: 40 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-900 via-indigo-700 to-blue-600 bg-clip-text text-transparent">
              Style Meets Comfort
            </span>
            <br />
            <span className="text-gray-800">Everyday Wear Redefined</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Discover breathable boxers, stylish under jeans, and premium ladies’ wear —
            all crafted with precision for your daily comfort. Perfect for every move, all day long.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 shadow-lg transition-all duration-300">
              Shop Now
            </button>
            <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-xl font-semibold hover:bg-blue-900 hover:text-white shadow-md transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full h-[420px] md:h-[500px] flex justify-center"
        // initial={{ opacity: 0, scale: 0.9 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.8 }}
        >
          <img
            className="rounded-2xl w-full h-full object-cover shadow-2xl"
            src="https://img.freepik.com/free-photo/portrait-sporty-handsome-strong-man-healthy-athletic-fitness-model-posing-near-gray-wall-white-underwear_158538-17459.jpg?t=st=1756041540~exp=1756045140~hmac=b6a6dc6a0b2f066a6289a67cdaf8b7e739237dde363658ed9686275e064d0608&w=1480"
            alt="hero"
          />

          {/* Gradient overlay for premium look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
