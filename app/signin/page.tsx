"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { auth, db } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { GradientButton } from "@/components/ui/gradient-button";
import Navvbar from "@/components/ui/navvbar";

export default function SignIn() {
  const router = useRouter();
  const [isNewUser, setIsNewUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Create user document in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        createdAt: new Date().toISOString(),
      });

      router.push("/homePage");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isNewUser) {
        const result = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password,
        );
        await setDoc(doc(db, "users", result.user.uid), {
          name: formData.name,
          email: formData.email,
          createdAt: new Date().toISOString(),
        });
      } else {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password,
        );
      }
      router.push("/homePage");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" bg-black ">
        <Navvbar />
      </div>
      <main className="min-h-screen bg-black flex items-center">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {isNewUser ? "Create Account" : "Sign In"}
              </h2>

              {error && (
                <div className="bg-red-500/20 text-red-200 p-3 rounded-lg mb-4">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {isNewUser && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-600 text-white focus:outline-none focus:border-white"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                )}

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    title="Email Address"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-600 text-white focus:outline-none focus:border-white"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    title="Password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-600 text-white focus:outline-none focus:border-white"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-4">
                  <GradientButton
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing..."
                      : isNewUser
                        ? "Create Account"
                        : "Sign In"}
                  </GradientButton>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black text-gray-400">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <GradientButton
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full"
                    disabled={loading}
                  >
                    Sign in with Google
                  </GradientButton>

                  <button
                    type="button"
                    onClick={() => setIsNewUser(!isNewUser)}
                    className="w-full text-gray-400 hover:text-white text-sm"
                  >
                    {isNewUser
                      ? "Already have an account? Sign in"
                      : "Need an account? Create one"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
