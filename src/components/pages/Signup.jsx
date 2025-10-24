import { useNavigate } from "react-router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Show form data in console
    console.log("User registered:", credentials);
    // 1️⃣ Save user data in localStorage
    localStorage.setItem("registeredUser", JSON.stringify(credentials));



    // 2️⃣ Show success toast
    toast.success("User registered successfully!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });


    // 3️⃣ Reset input fields
    setCredentials({
      username: "",
      email: "",
      password: "",
    });

    setTimeout(() => navigate("/signin"), 2000);
  };
  const gotoSignin = () => {
    navigate("/signin");
  };

  return (
    <>
      <ToastContainer />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f3f0ff] to-[#ffffff] px-4">
        <div className="w-full max-w-md relative flex flex-col p-6 rounded-2xl bg-white shadow-2xl border border-gray-100">
          <div className="text-3xl font-extrabold mb-3 text-[#1e0e4b] text-center tracking-tight">
            Welcome <span className="text-[#7747ff]"> Back</span> to App
          </div>
          <div className="text-md font-bold mb-6 text-center text-black">
            Log in to <span className="text-[#7747ff] font-bold">Bs garments</span> to access your account.
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Username */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 text-sm font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="name"
                value={credentials.username}
                onChange={handleChange}
                name="username"
                placeholder="Enter your name"
                className="rounded-xl border border-gray-200 text-sm w-full font-normal text-black h-12 px-4 focus:ring-4 ring-offset-2 ring-[#7747ff]/50 outline-none transition-all duration-200 shadow-sm"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={credentials.email}
                onChange={handleChange}
                name="email"
                placeholder="Enter your email"
                className="rounded-xl border border-gray-200 text-sm w-full font-normal text-black h-12 px-4 focus:ring-4 ring-offset-2 ring-[#7747ff]/50 outline-none transition-all duration-200 shadow-sm"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-600 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
                name="password"
                placeholder="Enter your password"
                className="rounded-xl border border-gray-200 text-sm w-full font-normal text-black h-12 px-4 focus:ring-4 ring-offset-2 ring-[#7747ff]/50 outline-none transition-all duration-200 shadow-sm"
                required
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <a href="#" className="text-sm text-[#7747ff] hover:underline transition-all">
                Forgot your password?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-[#7747ff] hover:bg-[#6539e6] w-full py-3 rounded-xl text-white text-base font-semibold tracking-wide shadow-md transition-all duration-200"
            >
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gray-200"></div>
              <div className="text-sm text-gray-500 font-medium">Or sign up with</div>
              <div className="h-px w-16 bg-gray-200"></div>
            </div>
          </form>

          <div className="text-sm text-center mt-6">
            Already have an account?{" "}
            <a
              onClick={gotoSignin}
              className="text-[#7747ff] font-semibold hover:underline cursor-pointer"
            >
              Sign in here!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
