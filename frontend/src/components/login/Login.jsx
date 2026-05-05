import axios from "axios";
import { useContext, useState } from "react";
import { FaArrowLeft, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

export default function LoginPage() {
  const { setuser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-slate-800 shadow-sm transition duration-200 placeholder:text-slate-400 hover:border-indigo-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setmessage("");

    await axios
      .post("https://noteshub-hbf2.onrender.com/api/user/login", { email, password })
      .then((response) => {
        const user = response.data.user;
        const token = response.data.token;

        console.log(response);
        console.log(token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        setuser(user);
        setmessage("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setmessage(
          err.response?.data?.message || "Invalid credentials. Please try again."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 py-10">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-md transition duration-300 hover:bg-white hover:text-indigo-800"
      >
        <FaArrowLeft />
        Back
      </button>

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[0.9fr_1.1fr]">
        <div className="hidden bg-indigo-600 p-10 text-white md:flex md:flex-col md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-100">
              NotesHub
            </p>
            <h2 className="mt-8 text-4xl font-bold leading-tight">
              Continue your learning journey.
            </h2>
            <p className="mt-4 text-base leading-7 text-indigo-100">
              Access your saved notes, resources, and study material from one
              focused workspace.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
            <div className="mb-4 h-2 w-24 rounded-full bg-white/70" />
            <div className="space-y-3">
              <div className="h-3 rounded-full bg-white/30" />
              <div className="h-3 w-4/5 rounded-full bg-white/30" />
              <div className="h-3 w-2/3 rounded-full bg-white/30" />
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Login
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Log in to continue managing your notes.
            </p>

            {message && (
              <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClass}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="font-semibold text-indigo-600 transition hover:text-indigo-800 hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
