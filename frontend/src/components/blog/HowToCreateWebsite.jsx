import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaptopCode,
  FaCode,
  FaRocket,
  FaArrowLeft,
  FaGlobe,
} from "react-icons/fa";

const FirstWebsiteBlog = () => {

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
        <div className="relative overflow-hidden mt-10 rounded-[45px] bg-gradient-to-br from-blue-600 via-cyan-600 to-slate-900 p-10 md:p-16 shadow-2xl">

          {/* Blur Effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <div className="flex flex-wrap gap-4">

              <span className="bg-white text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
                Web Development
              </span>

              <span className="bg-slate-900/40 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm">
                HTML • CSS • JavaScript
              </span>

            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-8">
              Building Your First Website
              <br />
              With HTML, CSS & JS 🚀
            </h1>

            <p className="text-slate-100 text-lg leading-8 mt-6 max-w-4xl">
              Learn how to build your first modern and responsive website using
              HTML for structure, CSS for styling, and JavaScript for
              interactivity.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 px-8 py-4 rounded-2xl font-bold">
                Start Learning
              </button>

              <button className="border border-white/40 hover:bg-white/10 text-white transition duration-300 px-8 py-4 rounded-2xl font-bold">
                Explore Tutorial
              </button>

            </div>

          </div>

        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaHtml5 className="text-6xl text-orange-500" />

            <h2 className="text-2xl font-bold mt-5">
              HTML
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Creates the structure and content of webpages.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCss3Alt className="text-6xl text-blue-500" />

            <h2 className="text-2xl font-bold mt-5">
              CSS
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Styles the website with colors, layouts, and animations.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaJs className="text-6xl text-yellow-400" />

            <h2 className="text-2xl font-bold mt-5">
              JavaScript
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Adds functionality and interactivity to webpages.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaGlobe className="text-6xl text-cyan-500" />

            <h2 className="text-2xl font-bold mt-5">
              Responsive Design
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Make websites work perfectly on all devices.
            </p>

          </div>

        </div>

        {/* About Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-2xl">

            <FaLaptopCode className="text-7xl text-blue-500" />

            <h2 className="text-4xl font-bold mt-8 text-blue-500">
              What Is A Website?
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-lg leading-9 mt-6">
              A website is a collection of webpages that can be accessed through
              the internet using a browser. Websites are built using frontend
              technologies like HTML, CSS, and JavaScript.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-9 mt-6">
              HTML creates structure, CSS adds styling, and JavaScript makes the
              website interactive and dynamic.
            </p>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl font-bold">
                Easy To Learn
              </h3>

              <p className="leading-8 mt-4">
                HTML, CSS, and JS are beginner-friendly technologies.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl font-bold">
                Creative Design
              </h3>

              <p className="leading-8 mt-4">
                Build beautiful layouts and responsive interfaces.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl font-bold">
                Real Projects
              </h3>

              <p className="leading-8 mt-4">
                Create portfolios, landing pages, blogs, and more.
              </p>
            </div>

          </div>

        </div>

        {/* Step By Step */}
        <div className="mt-20">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Steps To Build Your First Website 🔥
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {[
              {
                title: "Create HTML Structure",
                desc: "Use headings, paragraphs, images, and buttons.",
              },
              {
                title: "Add CSS Styling",
                desc: "Use colors, spacing, flexbox, and responsive design.",
              },
              {
                title: "Use JavaScript",
                desc: "Add interactivity like buttons, sliders, and forms.",
              },
              {
                title: "Deploy Website",
                desc: "Host your website online using Netlify or GitHub Pages.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-8 shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <h3 className="text-3xl font-bold text-blue-500">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-5">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Code Example */}
        <div className="mt-20 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[40px] p-8 md:p-14 shadow-2xl">

          <div className="flex items-center gap-4">

            <FaCode className="text-5xl text-blue-500" />

            <h2 className="text-4xl font-bold">
              Simple Website Example
            </h2>

          </div>

          <div className="bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-3xl p-6 mt-10 overflow-x-auto">

            <pre className="text-slate-800 dark:text-slate-300 text-sm md:text-base">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>

<body>

  <h1>Hello World 🚀</h1>
  <p>My first website using HTML, CSS & JS</p>

  <button>Click Me</button>

</body>
</html>
`}
            </pre>

          </div>

        </div>

        {/* Why Learn Web Development */}
        <div className="mt-20">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Why Learn Web Development? 💡
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-xl">

              <h3 className="text-3xl font-bold">
                High Demand
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                Web developers are highly demanded in startups and companies.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-xl">

              <h3 className="text-3xl font-bold">
                Freelancing
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                Build websites for clients and earn through freelancing.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-xl">

              <h3 className="text-3xl font-bold">
                Creative Career
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                Design and develop modern user-friendly websites.
              </p>

            </div>

          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 rounded-[45px] p-10 md:p-16 text-center shadow-2xl">

          <FaRocket className="text-6xl text-white mx-auto" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-8">
            Start Your Web Development Journey 🚀
          </h2>

          <p className="text-slate-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Learn HTML, CSS, and JavaScript step-by-step and build modern,
            responsive websites from scratch.
          </p>

          <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 mt-8 px-10 py-4 rounded-2xl font-bold text-lg">
            Explore More Blogs
          </button>

        </div>

      </div>
    </div>
  );
};

export default FirstWebsiteBlog;