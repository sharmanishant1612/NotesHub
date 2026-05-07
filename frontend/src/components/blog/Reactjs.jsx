import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaCode, FaLaptopCode } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const ReactBlog = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 px-4 py-10 transition-colors duration-300">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 px-5 py-3 rounded-2xl text-slate-900 dark:text-white"
        >
          ← Back
        </button>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 border border-slate-300 dark:border-slate-700 rounded-3xl p-8 md:p-14 shadow-2xl">

          <div className="flex flex-wrap items-center gap-4">

            <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Frontend Development
            </span>

            <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-5 py-2 rounded-full text-sm">
              ReactJS
            </span>

          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mt-8 leading-tight">
            Complete ReactJS Guide for Beginners 🚀
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-6 max-w-4xl">
            Learn ReactJS from scratch and build modern, responsive, and fast
            web applications using components, hooks, state management, JSX,
            routing, and Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-7 py-3 rounded-2xl font-semibold text-white">
              Start Learning
            </button>

            <button className="border border-slate-400 dark:border-slate-600 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 px-7 py-3 rounded-2xl font-semibold">
              Explore More
            </button>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <FaReact className="text-5xl text-blue-500" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              Components
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Build reusable UI components easily in ReactJS.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <SiJavascript className="text-5xl text-yellow-400" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              JSX
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Write HTML inside JavaScript using JSX syntax.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <FaCode className="text-5xl text-green-400" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              Hooks
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Manage state and lifecycle using React Hooks.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <SiTailwindcss className="text-5xl text-cyan-400" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              Tailwind
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Style React apps quickly using utility classes.
            </p>
          </div>

        </div>

        {/* What is React */}
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 mt-14 shadow-xl">

          <h2 className="text-4xl font-bold text-blue-500">
            What is ReactJS?
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-9 text-lg mt-6">
            ReactJS is a powerful JavaScript library developed by Facebook for
            building fast and interactive user interfaces. It follows a
            component-based architecture that allows developers to create
            reusable UI elements and scalable applications.
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-9 text-lg mt-6">
            React uses a Virtual DOM which improves performance and updates only
            the necessary parts of the webpage instead of reloading the entire
            page.
          </p>

        </div>

        {/* Code Example */}
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 mt-14 shadow-xl">

          <div className="flex items-center gap-4">
            <FaLaptopCode className="text-4xl text-blue-500" />

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              React Component Example
            </h2>
          </div>

          <div className="bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl p-6 mt-8 overflow-x-auto">

            <pre className="text-slate-800 dark:text-slate-300 text-sm md:text-base">
{`function App() {
  return (
    <div>
      <h1>Hello React 🚀</h1>
      <p>Welcome to NotesHub</p>
    </div>
  );
}

export default App;
`}
            </pre>

          </div>

        </div>

        {/* Advantages Section */}
        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center text-blue-500">
            Why Developers Love React ❤️
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Fast Performance
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                React uses Virtual DOM to update only necessary UI parts which
                makes applications extremely fast.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Reusable Components
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                Developers can create reusable components which reduces code
                duplication and improves maintainability.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Huge Community
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                React has one of the largest developer communities and ecosystem
                support.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Easy Learning Curve
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                Beginners can start building projects quickly with React and
                modern frontend tools.
              </p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 mt-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to Master ReactJS?
          </h2>

          <p className="text-slate-100 text-lg mt-5 max-w-3xl mx-auto leading-8">
            Start building modern web applications today using ReactJS,
            Tailwind CSS, and JavaScript.
          </p>

          <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 mt-8 px-8 py-4 rounded-2xl font-bold text-lg">
            Explore More Blogs
          </button>

        </div>

      </div>
    </div>
  );
};

export default ReactBlog;