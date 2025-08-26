import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <section className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6">
            <div className="text-center max-w-xl">
                {/* Icon / Illustration */}
                <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-blue-200/40 blur-2xl rounded-full" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative h-24 w-24 mx-auto text-blue-700"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    >
                        <path strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h4m10-11l-2-2m2 2v10a1 1 0 01-1 1h-4m-6 0h6" />
                        <path strokeWidth="1.5" d="M9 21V9h6v12" />
                    </svg>
                </div>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-blue-900">
                    404
                </h1>
                <p className="mt-2 text-xl font-semibold text-gray-800">
                    Page Not Found
                </p>
                <p className="mt-3 text-gray-600">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 shadow transition"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/contact"
                        className="px-6 py-3 rounded-xl border border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition"
                    >
                        Contact Support
                    </Link>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    Error code: <span className="font-mono">404_NOT_FOUND</span>
                </p>
            </div>
        </section>
    );
}

