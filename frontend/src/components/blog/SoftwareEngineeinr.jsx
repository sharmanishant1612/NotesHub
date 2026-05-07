import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaTools,
  FaRocket,
  FaBug,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";

const SoftwareEngineeringBlog = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-5 py-3 rounded-2xl hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 shadow-md"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Hero Section */}
        <div className="relative overflow-hidden mt-10 rounded-[45px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-2xl">

          {/* Top Banner */}
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 p-10 md:p-16">

            <div className="flex flex-wrap gap-4">

              <span className="bg-white text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
                Software Development
              </span>

              <span className="bg-slate-900/40 text-white px-5 py-2 rounded-full text-sm backdrop-blur-md">
                Beginner Friendly
              </span>

            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-8">
              What Is
              <br />
              Software Engineering? 🚀
            </h1>

            <p className="text-slate-100 text-lg leading-8 mt-6 max-w-4xl">
              Learn software engineering in a simple and beginner-friendly way.
              Understand how developers build applications, websites, and
              software systems used in real life.
            </p>

          </div>

          {/* Bottom Grid */}
          <div className="grid md:grid-cols-3 gap-6 p-8 md:p-10">

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6">

              <FaCode className="text-5xl text-blue-500" />

              <h2 className="text-2xl font-bold mt-5">
                Coding
              </h2>

              <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
                Developers write code to create software and applications.
              </p>

            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6">

              <FaProjectDiagram className="text-5xl text-cyan-500" />

              <h2 className="text-2xl font-bold mt-5">
                Planning
              </h2>

              <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
                Engineers plan software before building real projects.
              </p>

            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6">

              <FaRocket className="text-5xl text-green-500" />

              <h2 className="text-2xl font-bold mt-5">
                Deployment
              </h2>

              <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
                Final software is launched for users across the world.
              </p>

            </div>

          </div>

        </div>

        {/* Main Explanation */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[40px] p-10 text-white shadow-2xl">

            <FaLaptopCode className="text-7xl" />

            <h2 className="text-4xl font-extrabold mt-8">
              Simple Definition 💡
            </h2>

            <p className="text-lg leading-9 mt-6">
              Software Engineering is the process of designing, building,
              testing, and maintaining software using engineering principles.
            </p>

            <p className="text-lg leading-9 mt-6">
              It helps developers create reliable, scalable, and efficient
              software applications for users and businesses.
            </p>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white dark:bg-slate-900 border-l-8 border-blue-500 rounded-3xl p-6 shadow-xl">

              <h3 className="text-3xl font-bold">
                Websites
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                Software engineers build websites like blogs, e-commerce, and
                social media platforms.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 border-l-8 border-cyan-500 rounded-3xl p-6 shadow-xl">

              <h3 className="text-3xl font-bold">
                Mobile Apps
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                Apps like Instagram, WhatsApp, and YouTube are built using
                software engineering concepts.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 border-l-8 border-green-500 rounded-3xl p-6 shadow-xl">

              <h3 className="text-3xl font-bold">
                Software Systems
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                Banks, hospitals, and companies use software systems daily.
              </p>

            </div>

          </div>

        </div>

        {/* Process Section */}
        <div className="mt-24">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Software Development Process 🔥
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

            <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

              <FaLightbulb className="text-6xl text-yellow-500" />

              <h3 className="text-3xl font-bold mt-6">
                Planning
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-5 leading-8">
                Understanding requirements and project goals.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

              <FaCode className="text-6xl text-blue-500" />

              <h3 className="text-3xl font-bold mt-6">
                Development
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-5 leading-8">
                Writing code using programming languages and frameworks.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

              <FaBug className="text-6xl text-red-500" />

              <h3 className="text-3xl font-bold mt-6">
                Testing
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-5 leading-8">
                Finding and fixing bugs before software launch.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800 hover:-translate-y-2 transition duration-300">

              <FaRocket className="text-6xl text-green-500" />

              <h3 className="text-3xl font-bold mt-6">
                Deployment
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-5 leading-8">
                Publishing software for real-world users.
              </p>

            </div>

          </div>

        </div>

        {/* Roles Section */}
        <div className="mt-24 bg-white dark:bg-slate-900 rounded-[45px] p-10 md:p-14 shadow-2xl border border-slate-300 dark:border-slate-800">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Roles In Software Engineering 👨‍💻
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 text-center">

              <FaLaptopCode className="text-5xl text-blue-500 mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Frontend Developer
              </h3>

            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 text-center">

              <FaTools className="text-5xl text-cyan-500 mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Backend Developer
              </h3>

            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 text-center">

              <FaBug className="text-5xl text-red-500 mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Software Tester
              </h3>

            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 text-center">

              <FaUsers className="text-5xl text-green-500 mx-auto" />

              <h3 className="text-2xl font-bold mt-5">
                Team Collaboration
              </h3>

            </div>

          </div>

        </div>

        {/* Why Learn */}
        <div className="mt-24 grid lg:grid-cols-3 gap-8">

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[35px] p-8 text-white shadow-2xl">

            <h3 className="text-3xl font-bold">
              High Salary 💰
            </h3>

            <p className="leading-8 mt-5">
              Software engineering is one of the highest-paying careers in tech.
            </p>

          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-[35px] p-8 text-white shadow-2xl">

            <h3 className="text-3xl font-bold">
              Remote Jobs 🌍
            </h3>

            <p className="leading-8 mt-5">
              Many companies offer work-from-home opportunities.
            </p>

          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-[35px] p-8 text-white shadow-2xl">

            <h3 className="text-3xl font-bold">
              Creative Career 🚀
            </h3>

            <p className="leading-8 mt-5">
              Build innovative products and solve real-world problems.
            </p>

          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-24 rounded-[45px] bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 p-10 md:p-16 text-center shadow-2xl">

          <FaRocket className="text-7xl text-white mx-auto" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-8">
            Start Your Software Engineering Journey 🚀
          </h2>

          <p className="text-slate-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Learn programming, build projects, solve problems, and become a
            professional software engineer step-by-step.
          </p>

          <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 mt-8 px-10 py-4 rounded-2xl font-bold text-lg">
            Explore More Blogs
          </button>

        </div>

      </div>
    </div>
  );
};

export default SoftwareEngineeringBlog;