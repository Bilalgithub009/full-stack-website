import { motion } from "framer-motion";

function Hero() {

  return (
    <section id="about" className="relative bg-white text-gray-800 overflow-hidden">
      {/* Background Circle Blur */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start bg-white/30 backdrop-blur-sm p-6 sm:p-10 rounded-xl shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-snug">
            Style Meets Comfort
            <br />
            <span className="text-indigo-600">Everyday Wear Redefined</span>
          </h1>
          <p className="mt-6 mb-8 text-gray-700 text-base sm:text-lg font-medium">
            Discover breathable boxers, stylish under jeans, and premium
            ladies’ wear — all crafted with precision for your daily comfort.
            Perfect for every move, all day long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 w-full sm:w-auto">
              Shop Now
            </button>
            <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            className="rounded-xl w-full h-auto object-cover shadow-xl"
            src="https://img.freepik.com/free-photo/portrait-sporty-handsome-strong-man-healthy-smiling-athletic-fitness-model-posing-near-gray-wall-white-underwear_158538-17455.jpg?semt=ais_hybrid&w=740&q=80"

            alt="hero"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
