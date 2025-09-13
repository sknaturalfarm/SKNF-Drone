// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import {
//   ArrowLeftIcon,
// } from "@heroicons/react/24/outline";

// export default function AuthPage() {
//   const [isSignIn, setIsSignIn] = useState(true);

//   return (
//     <>
//       <Head>
//         <title>{isSignIn ? "Sign In" : "Sign Up"} | SK Naturalfarm</title>
//       </Head>

//       {/* Navigation Header (editednew) */}
//         <div className="bg-white/80 backdrop-blur-lg border-b border-green-100 fixed top-0 left-0 w-full z-50">
//           <div className="max-w-screen-2xl mx-auto px-8 py-4">
//             <Link
//               href="/"
//               className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-all duration-300 hover:translate-x-1"
//             >
//               <ArrowLeftIcon className="h-5 w-5 mr-2" />
//               Back to Home
//             </Link>
//           </div>
//         </div>

//       <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-green-100 via-white to-green-50">

//         {/* Navigation Header
//         <div className="bg-white/80 backdrop-blur-lg border-b border-green-100 sticky top-0 z-50">
//           <div className="max-w-7xl mx-auto px-6 py-4">
//             <Link
//               href="/"
//               className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-all duration-300 hover:translate-x-1"
//             >
//               <ArrowLeftIcon className="h-5 w-5 mr-2" />
//               Back to Home
//             </Link>
//           </div>
//         </div> */}
        
//         {/* Left section with logo and navigation */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-10 bg-white shadow-xl z-10">
//           <div href="/" className="mb-6 flex items-center space-x-4 flex-col">
//             <Image
//               src="/newLogo.jpg"
//               // src="/logo-mark.png"
//               alt="logo"
//               width={100} 
//               height={100} 
//               className="rounded-full"
//             />
//             <span className="text-2xl font-bold text-green-700">SK Natural Farm</span>
//           </div>

//           {/* <Link href="/" className="mb-6 flex items-center space-x-4">
//             <Image
//               src="/newLogo.jpg"
//               // src="/logo-mark.png"
//               alt="logo"
//               width={150} 
//               height={150} 
//               className="rounded-full"
//             />
//             <span className="text-2xl font-bold text-green-700">SK Natural Farm</span>
//           </Link> */}

//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             {isSignIn ? "Welcome Back!" : "Create an Account"}
//           </h1>
//           <p className="text-gray-600 mb-8">
//             {isSignIn
//               ? "Sign in to continue exploring smart drone solutions."
//               : "Sign up to start your journey with SK Naturalfarm."}
//           </p>

//           {/* Auth Form */}
//           <form className="w-full max-w-sm space-y-4">
//             {!isSignIn && (
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             )}
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//             />

//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//             >
//               {isSignIn ? "Sign In" : "Sign Up"}
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

//         {/* Right section (optional image or branding) */}
//         <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/drone-banner.jpg')` }}>
//           {/* Add an image in public/drone-banner.jpg or replace with custom drone image */}
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

// --------------------------


// import React, { useState } from "react";
// import { useRouter } from "next/router";

// /**
//  * Combined Auth page (Sign In / Sign Up)
//  * - Sign Up POST -> http://localhost:8080/api/auth/register
//  * - Sign In POST -> http://localhost:8080/api/auth/login
//  *
//  * Notes:
//  * - Change backend URL if your Spring app runs elsewhere.
//  * - Backend must allow CORS from localhost:3000 (see backend @CrossOrigin or CORS config).
//  */

// export default function AuthPage() {
//   const router = useRouter();

//   // shared
//   const [mode, setMode] = useState("signin"); // "signin" or "signup"
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   // signup fields
//   const [fullName, setFullName] = useState("");
//   const [signupEmail, setSignupEmail] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");

//   // signin fields
//   const [signinEmail, setSigninEmail] = useState("");
//   const [signinPassword, setSigninPassword] = useState("");

//   // helper to show messages
//   const showMessage = (text, timeoutMs = 6000) => {
//     setMessage(text);
//     if (timeoutMs) {
//       setTimeout(() => setMessage(null), timeoutMs);
//     }
//   };

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: fullName.trim(),
//           email: signupEmail.trim(),
//           password: signupPassword,
//         }),
//       });

//       const data = await res.json();
//       if (res.ok && data.success) {
//         showMessage("Registration successful. You can now sign in.");
//         // clear signup fields
//         setFullName("");
//         setSignupEmail("");
//         setSignupPassword("");
//         setMode("signin");
//       } else {
//         // backend returns a message in data.message
//         showMessage(data?.message || "Registration failed");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       showMessage("Network error - could not reach server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSigninSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     try {
//       const res = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: signinEmail.trim(),
//           password: signinPassword,
//         }),
//       });

//       const data = await res.json();
//       if (res.ok && data.success) {
//         // Successful login. For now we just store minimal user info in sessionStorage
//         // (In production you should use httpOnly cookies with JWT or server session)
//         const user = {
//           id: data.userId,
//           fullName: data.fullName,
//           email: data.email,
//         };
//         try {
//           sessionStorage.setItem("user", JSON.stringify(user));
//         } catch (_) {}
//         showMessage("Login successful — redirecting...");
//         // small delay to show message then redirect
//         setTimeout(() => {
//           router.push("/");
//         }, 800);
//       } else {
//         showMessage(data?.message || "Invalid credentials");
//       }
//     } catch (err) {
//       console.error("Signin error:", err);
//       showMessage("Network error - could not reach server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={{ marginBottom: 8 }}>
//           {mode === "signin" ? "Sign In" : "Create an account"}
//         </h2>

//         <div style={styles.toggleRow}>
//           <button
//             onClick={() => {
//               setMode("signin");
//               setMessage(null);
//             }}
//             style={mode === "signin" ? styles.activeTab : styles.tab}
//           >
//             Sign In
//           </button>
//           <button
//             onClick={() => {
//               setMode("signup");
//               setMessage(null);
//             }}
//             style={mode === "signup" ? styles.activeTab : styles.tab}
//           >
//             Sign Up
//           </button>
//         </div>

//         {message && <div style={styles.message}>{message}</div>}

//         {mode === "signup" ? (
//           <form onSubmit={handleSignupSubmit} style={styles.form}>
//             <label style={styles.label}>
//               Full Name
//               <input
//                 required
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 placeholder="Your full name"
//                 style={styles.input}
//               />
//             </label>

//             <label style={styles.label}>
//               Email
//               <input
//                 required
//                 type="email"
//                 value={signupEmail}
//                 onChange={(e) => setSignupEmail(e.target.value)}
//                 placeholder="name@example.com"
//                 style={styles.input}
//               />
//             </label>

//             <label style={styles.label}>
//               Password
//               <input
//                 required
//                 type="password"
//                 value={signupPassword}
//                 onChange={(e) => setSignupPassword(e.target.value)}
//                 placeholder="At least 6 characters"
//                 minLength={6}
//                 style={styles.input}
//               />
//             </label>

//             <button type="submit" disabled={loading} style={styles.primaryBtn}>
//               {loading ? "Registering..." : "Create account"}
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleSigninSubmit} style={styles.form}>
//             <label style={styles.label}>
//               Email
//               <input
//                 required
//                 type="email"
//                 value={signinEmail}
//                 onChange={(e) => setSigninEmail(e.target.value)}
//                 placeholder="name@example.com"
//                 style={styles.input}
//               />
//             </label>

//             <label style={styles.label}>
//               Password
//               <input
//                 required
//                 type="password"
//                 value={signinPassword}
//                 onChange={(e) => setSigninPassword(e.target.value)}
//                 placeholder="Your password"
//                 style={styles.input}
//               />
//             </label>

//             <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//               <button type="submit" disabled={loading} style={styles.primaryBtn}>
//                 {loading ? "Signing in..." : "Sign in"}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => {
//                   setMode("signup");
//                 }}
//                 style={styles.linkBtn}
//               >
//                 Create account
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// /* Minimal inline styles to keep the page consistent with any project */
// const styles = {
//   page: {
//     minHeight: "80vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 24,
//   },
//   card: {
//     width: 420,
//     maxWidth: "95%",
//     borderRadius: 8,
//     padding: 20,
//     boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
//     background: "#fff",
//   },
//   toggleRow: {
//     display: "flex",
//     gap: 8,
//     marginBottom: 12,
//   },
//   tab: {
//     flex: 1,
//     padding: "8px 10px",
//     borderRadius: 6,
//     border: "1px solid #ddd",
//     background: "#f7f7f7",
//     cursor: "pointer",
//   },
//   activeTab: {
//     flex: 1,
//     padding: "8px 10px",
//     borderRadius: 6,
//     border: "1px solid #bbb",
//     background: "#fff",
//     cursor: "pointer",
//     fontWeight: 600,
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: 10,
//   },
//   label: {
//     display: "flex",
//     flexDirection: "column",
//     fontSize: 14,
//     gap: 6,
//   },
//   input: {
//     padding: "8px 10px",
//     fontSize: 14,
//     borderRadius: 6,
//     border: "1px solid #ddd",
//   },
//   primaryBtn: {
//     marginTop: 6,
//     padding: "10px 12px",
//     borderRadius: 6,
//     border: "none",
//     cursor: "pointer",
//     background: "#0b72ff",
//     color: "#fff",
//     fontWeight: 600,
//   },
//   linkBtn: {
//     marginTop: 6,
//     padding: "8px 10px",
//     borderRadius: 6,
//     border: "1px solid #ddd",
//     background: "#fff",
//     cursor: "pointer",
//   },
//   message: {
//     padding: 8,
//     background: "#fff4e5",
//     border: "1px solid #ffd6a5",
//     borderRadius: 6,
//     marginBottom: 8,
//   },
// };


///-----------------------

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function AuthPage() {
  const router = useRouter();

  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // helper
  const showMessage = (text, timeoutMs = 4000) => {
    setMessage(text);
    if (timeoutMs) setTimeout(() => setMessage(null), timeoutMs);
  };

  // signup
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
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
      const res = await fetch("http://localhost:8080/api/auth/login", {
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
        sessionStorage.setItem("user", JSON.stringify(user));
        showMessage("✅ Login successful — redirecting...");
        setTimeout(() => router.push("/"), 800);
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
            <div className="w-full max-w-sm bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm px-3 py-2 rounded mb-3">
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
