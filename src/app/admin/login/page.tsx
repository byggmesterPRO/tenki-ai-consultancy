"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-tenki-bg flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <a href="/" className="inline-flex items-center gap-3 mb-8">
            <img
              src="/assets/images/logo.png"
              alt="Tenki"
              className="h-10 w-10 object-contain"
            />
            <span className="font-ogg text-3xl font-bold text-tenki-text">
              tenki
            </span>
          </a>
          <h1 className="font-serif text-3xl text-tenki-text mb-2">
            Admin Login
          </h1>
          <p className="text-tenki-muted font-sans text-sm">
            Sign in to manage your content
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 space-y-6"
        >
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-widest text-tenki-muted"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
              placeholder="admin@tenki.ai"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-xs uppercase tracking-widest text-tenki-muted"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-stone-50 border-b border-stone-200 p-4 focus:outline-none focus:border-tenki-accent transition-colors text-tenki-text"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-tenki-text text-white py-4 rounded-lg font-medium hover:bg-tenki-accent transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-tenki-muted text-xs mt-8">
          <a href="/" className="hover:text-tenki-accent transition-colors">
            Back to website
          </a>
        </p>
      </div>
    </div>
  );
}
