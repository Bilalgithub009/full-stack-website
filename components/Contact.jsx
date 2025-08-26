import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 animate-fadeIn relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4">
            Contact Us SK <span className="text-blue-600">Garments Team</span>
          </h2>
          <p className="text-black font-semibold text-lg sm:text-xl">
            We’d love to hear from you — whether it’s about sizes, custom orders,
            or just feedback on our latest styles. Team SK Garments is here for you!
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-10 rounded-xl shadow-lg">

          {/* Left Side - Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-bold text-black">Contact Info</h3>
            <p className="text-black">
              Have a question, suggestion, or just want to say hello?
              Feel free to contact us anytime!
            </p>
            <div>
              <p className="text-gray-700 font-medium text-sm">📧 Email:</p>
              <a href="mailto:skgarments@gmail.com" className="text-blue-500 text-sm" >
                skgarments@gmail.com
              </a>
              <p className="text-gray-700 font-medium mt-4 text-sm">📞 Phone:</p>
              <p className="text-gray-700 text-sm">+92 319 0266227</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium text-sm">📍 Address:</p>
              <p className="text-sm">Near Al Falah Masjid Bhangoriya Goth Karachi, Pakistan</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block px-10 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923190266227"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </section>
  );
};

export default ContactSection;
