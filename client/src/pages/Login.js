import { useState } from "react";
import API from "../services/api";
import loginBG from "../assets/loginBG.jpg";

function Login({setShowRegister}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful ✅");
      window.location.reload();
      
    } catch (err) {
      console.log(err);
      alert("Login failed ❌");
    }
  };
    
    
 return (
  <div
    className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${loginBG})` }}
  >
    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* CARD (FULLY TRANSPARENT) */}
    <div className="relative w-80 p-8 rounded-2xl">

      {/* TITLE */}
      <h2 className="text-white text-lg mb-6 text-center font-medium drop-shadow-md">
        Have an account?
      </h2>

      {/* USERNAME */}
      <input
        type="email"
        placeholder="Username"
       className="w-full mb-4 px-4 py-2 rounded-full 
                    bg-white/10 backdrop-blur-sm 
                    text-white placeholder-gray-300 
                    outline-none focus:ring-1 focus:ring-white/40"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* PASSWORD */}
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-5 px-4 py-2 rounded-full 
                  bg-white/10 backdrop-blur-sm 
                  text-white placeholder-gray-300 
                  outline-none focus:ring-1 focus:ring-white/40"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* BUTTON */}
      <button
        onClick={handleLogin}
        className="w-full py-2 rounded-full bg-orange-200 text-black font-semibold hover:bg-orange-300 transition"
      >
        SIGN IN
      </button>

      <p className="text-center text-white text-sm mt-4">
        Don't have an account?{" "}
        <span
          onClick={() =>setShowRegister(true)}
          className="text-orange-200 cursor-pointer hover:underline"
        >
          Register
        </span>
      </p>

      {/* OPTIONS */}
      <div className="flex justify-between text-xs text-white mt-4">
        <span className="flex items-center gap-1">
          <input type="checkbox" />
          Remember Me
        </span>
        <span className="cursor-pointer">Forgot Password</span>
      </div>

      {/* DIVIDER */}
      <div className="text-center text-white text-xs mt-4">
        — Or Sign In With —
      </div>

    </div>
  </div>
);
}

export default Login;