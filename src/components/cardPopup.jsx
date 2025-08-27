import { useState } from "react";
import { Star } from "lucide-react";

function FeedbackPopup() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => setShowPopup(false), 2000); // 2s baad band ho jaye
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-12 w-[90%] md:w-[700px] text-center animate-fadeIn">
        {!submitted ? (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Give Your Feedback ⭐
            </h2>
            <p className="text-gray-600 mb-4">
              How would you rate your experience with us?
            </p>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={36}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer transition-colors ${rating >= star
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                    }`}
                />
              ))}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className={`mt-2 px-4 py-2 rounded-lg transition ${rating === 0
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
            >
              Submit Feedback
            </button>
          </>
        ) : (
          <div className="py-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              🎉 Thank You!
            </h2>
            <p className="text-gray-700">We appreciate your feedback.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeedbackPopup;
