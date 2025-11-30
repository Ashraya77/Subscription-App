"use client";

import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function SignInPage() {
  const { signInWithEmail, signInWithGoogle } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const notify = ()=> {
    toast.success("login successfull")
  }
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmail(email, password);
      notify()
      router.push("/")
    } catch (error: any) {
      toast.error(error.message);
    }
    
  };

  const signUp = ()=>{
    router.push("/sign-up")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover" 
    style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="w-full max-w-md shadow-xl rounded-2xl p-8 bg-white/50 backdrop-blur">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        <div className="pt-5 text-center text-black">
          <h1>If you haven't registered <span className="text-blue-700 cursor-pointer hover:text-blue-900" onClick={signUp}>  clik here </span> for sign up</h1>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
         <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 bg-white-500 hover:bg-red-600 text-black  py-2 rounded-lg transition"
        >
        <img src="/google.png"
        className="h-8 w-8"
        alt="" />  Continue with Google
        </button>
      </div>
    </div>
  );
}