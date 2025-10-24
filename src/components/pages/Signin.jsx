import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser) {
      toast.error("No account found! Please register first.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });

      setTimeout(() => navigate("/home"), 1500);
    } else {
      toast.error("Invalid email or password!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f3f0ff] to-[#ffffff] px-4">
        <div className="w-full max-w-md relative flex flex-col p-6 rounded-2xl bg-white shadow-2xl border border-gray-100">
          <div className="text-3xl font-extrabold mb-3 text-[#1e0e4b] text-center tracking-tight">
            Welcome <span className="text-[#7747ff]">Back</span>
          </div>
          <div className="text-md font-bold mb-6 text-center text-black">
            Sign in to{" "}
            <span className="text-[#7747ff] font-bold">Bs garments</span> to
            access your account.
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-600 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Enter your email"
                className="rounded-xl border border-gray-200 text-sm w-full font-normal text-black h-12 px-4 focus:ring-4 ring-offset-2 ring-[#7747ff]/50 outline-none transition-all duration-200 shadow-sm"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-gray-600 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter your password"
                className="rounded-xl border border-gray-200 text-sm w-full font-normal text-black h-12 px-4 focus:ring-4 ring-offset-2 ring-[#7747ff]/50 outline-none transition-all duration-200 shadow-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#7747ff] hover:bg-[#6539e6] w-full py-3 rounded-xl text-white text-base font-semibold tracking-wide shadow-md transition-all duration-200"
            >
              Sign In
            </button>

            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 bg-gray-200"></div>
              <div className="text-sm text-gray-500 font-medium">
                Or login with
              </div>
              <div className="h-px w-16 bg-gray-200"></div>
            </div>
          </form>

          <div className="text-sm text-center mt-6">
            Don’t have an account yet?{" "}
            <a
              onClick={() => navigate("/signup")}
              className="text-[#7747ff] font-semibold hover:underline cursor-pointer"
            >
              Register here!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
