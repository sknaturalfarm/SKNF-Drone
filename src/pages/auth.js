// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// export default function AuthPage() {
//   const router = useRouter();

//   const [isSignIn, setIsSignIn] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   // form fields
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // helper
//   const showMessage = (text, timeoutMs = 4000) => {
//     setMessage(text);
//     if (timeoutMs) setTimeout(() => setMessage(null), timeoutMs);
//   };

//   // signup
//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ fullName, email, password }),
//       });

//       const data = await res.json();
//       if (res.ok && data.success) {
//         showMessage("✅ Registration successful. You can now sign in.");
//         setFullName("");
//         setEmail("");
//         setPassword("");
//         setIsSignIn(true);
//       } else {
//         showMessage(data?.message || "❌ Registration failed");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       showMessage("⚠️ Network error - server unreachable.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // signin
//   const handleSigninSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (res.ok && data.success) {
//         const user = {
//           id: data.userId,
//           fullName: data.fullName,
//           email: data.email,
//         };
//         sessionStorage.setItem("user", JSON.stringify(user));
//         showMessage("✅ Login successful — redirecting...");
//         setTimeout(() => router.push("/"), 800);
//       } else {
//         showMessage(data?.message || "❌ Invalid credentials");
//       }
//     } catch (err) {
//       console.error("Signin error:", err);
//       showMessage("⚠️ Network error - server unreachable.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>{isSignIn ? "Sign In" : "Sign Up"} | SK Naturalfarm</title>
//       </Head>

//       {/* Navigation Header */}
//       <div className="bg-white/80 backdrop-blur-lg border-b border-green-100 fixed top-0 left-0 w-full z-50">
//         <div className="max-w-screen-2xl mx-auto px-8 py-4">
//           <Link
//             href="/"
//             className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-all duration-300 hover:translate-x-1"
//           >
//             <ArrowLeftIcon className="h-5 w-5 mr-2" />
//             Back to Home
//           </Link>
//         </div>
//       </div>

//       <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-green-100 via-white to-green-50">
//         {/* Left section */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10 bg-white shadow-xl z-10">
//           <div className="mb-6 flex items-center space-x-4 flex-col">
//             <Image
//               src="/newLogo.jpg"
//               alt="logo"
//               width={100}
//               height={100}
//               className="rounded-full"
//             />
//             <span className="text-2xl font-bold text-green-700">
//               SK Natural Farm
//             </span>
//           </div>

//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             {isSignIn ? "Welcome Back!" : "Create an Account"}
//           </h1>
//           <p className="text-gray-600 mb-4">
//             {isSignIn
//               ? "Sign in to continue exploring smart drone solutions."
//               : "Sign up to start your journey with SK Naturalfarm."}
//           </p>

//           {/* Message */}
//           {message && (
//             <div className="w-full max-w-sm bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm px-3 py-2 rounded mb-3">
//               {message}
//             </div>
//           )}

//           {/* Form */}
//           <form
//             className="w-full max-w-sm space-y-4"
//             onSubmit={isSignIn ? handleSigninSubmit : handleSignupSubmit}
//           >
//             {!isSignIn && (
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             )}
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//             >
//               {loading
//                 ? isSignIn
//                   ? "Signing in..."
//                   : "Registering..."
//                 : isSignIn
//                 ? "Sign In"
//                 : "Sign Up"}
//             </button>

//             <p className="text-sm text-center text-gray-600">
//               {isSignIn ? (
//                 <>
//                   Don&apos;t have an account?{" "}
//                   <button
//                     type="button"
//                     onClick={() => setIsSignIn(false)}
//                     className="text-green-600 underline"
//                   >
//                     Sign Up
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   Already have an account?{" "}
//                   <button
//                     type="button"
//                     onClick={() => setIsSignIn(true)}
//                     className="text-green-600 underline"
//                   >
//                     Sign In
//                   </button>
//                 </>
//               )}
//             </p>
//           </form>
//         </div>

//         {/* Right section (image/branding) */}
//         <div
//           className="hidden lg:block w-1/2 bg-cover bg-center"
//           style={{ backgroundImage: `url('/drone-banner.jpg')` }}
//         >
//           <div className="h-full w-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
//             <h2 className="text-white text-4xl font-bold px-6 text-center">
//               Elevating Agriculture & Defense with Smart Drones
//             </h2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function AuthPage() {
  const router = useRouter();

  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  // form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // helper
  const showMessage = (text, timeoutMs = 4000) => {
    setMessage(text);
    if (timeoutMs) setTimeout(() => setMessage(null), timeoutMs);
  };

  // redirect if already logged in
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) router.push("/");
  }, []);

  // signup
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        showMessage("✅ Registration successful. You can now sign in.");
        setFullName("");
        setEmail("");
        setPassword("");
        setIsSignIn(true);
      } else {
        showMessage(data?.message || "❌ Registration failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      showMessage("⚠️ Network error - server unreachable.");
    } finally {
      setLoading(false);
    }
  };

  // signin
  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        const user = {
          id: data.userId,
          fullName: data.fullName,
          email: data.email,
        };

        // Save in sessionStorage or localStorage based on Remember Me
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          sessionStorage.setItem("user", JSON.stringify(user));
        }

        showMessage("✅ Login successful — redirecting...");
        setTimeout(() => router.push("/dashboard"), 800);
      } else {
        showMessage(data?.message || "❌ Invalid credentials");
      }
    } catch (err) {
      console.error("Signin error:", err);
      showMessage("⚠️ Network error - server unreachable.");
    } finally {
      setLoading(false);
    }
  };

  // handle forgot password
  const handleForgotPassword = () => {
    showMessage("🔗 Forgot Password clicked — integrate reset flow here.");
    // Ideally redirect to /forgot-password page or open modal
    // router.push("/forgot-password")
  };

  // handle social login placeholders
  const handleSocialLogin = (provider) => {
    showMessage(`🔗 Redirecting to ${provider} login...`);
    // Here you would call backend endpoint or NextAuth flow
  };

  return (
    <>
      <Head>
        <title>{isSignIn ? "Sign In" : "Sign Up"} | SK Naturalfarm</title>
      </Head>

      {/* Navigation Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-green-100 fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-2xl mx-auto px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-all duration-300 hover:translate-x-1"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-green-100 via-white to-green-50">
        {/* Left section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10 bg-white shadow-xl z-10">
          <div className="mb-6 flex items-center space-x-4 flex-col">
            <Image
              src="/newLogo.jpg"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-green-700">
              SK Natural Farm
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isSignIn ? "Welcome Back!" : "Create an Account"}
          </h1>
          <p className="text-gray-600 mb-4">
            {isSignIn
              ? "Sign in to continue exploring smart drone solutions."
              : "Sign up to start your journey with SK Naturalfarm."}
          </p>

          {/* Message */}
          {message && (
            <div
              className={`w-full max-w-sm px-3 py-2 rounded mb-3 text-sm ${
                message.startsWith("✅")
                  ? "bg-green-100 border border-green-300 text-green-800"
                  : "bg-yellow-100 border border-yellow-300 text-yellow-800"
              }`}
            >
              {message}
            </div>
          )}

          {/* Form */}
          <form
            className="w-full max-w-sm space-y-4"
            onSubmit={isSignIn ? handleSigninSubmit : handleSignupSubmit}
          >
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Remember Me + Forgot Password */}
            {isSignIn && (
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-green-600"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-green-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              {loading
                ? isSignIn
                  ? "Signing in..."
                  : "Registering..."
                : isSignIn
                ? "Sign In"
                : "Sign Up"}
            </button>

            {/* Social Login */}
            {isSignIn && (
              <div className="space-y-2">
                <p className="text-center text-gray-500 text-sm">or sign in with</p>
                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("Google")}
                    className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100"
                  >
                    <FcGoogle className="text-xl" /> Google
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("Facebook")}
                    className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-blue-600"
                  >
                    <FaFacebook /> Facebook
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("Instagram")}
                    className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 text-pink-500"
                  >
                    <FaInstagram /> Instagram
                  </button>
                </div>
              </div>
            )}

            <p className="text-sm text-center text-gray-600">
              {isSignIn ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(false)}
                    className="text-green-600 underline"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsSignIn(true)}
                    className="text-green-600 underline"
                  >
                    Sign In
                  </button>
                </>
              )}
            </p>
          </form>
        </div>

        {/* Right section (image/branding) */}
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url('/drone-banner.jpg')` }}
        >
          <div className="h-full w-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold px-6 text-center">
              Elevating Agriculture & Defense with Smart Drones
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
