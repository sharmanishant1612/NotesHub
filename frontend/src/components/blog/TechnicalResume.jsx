import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaUserTie,
  FaCode,
  FaLaptopCode,
  FaCheckCircle,
  FaLightbulb,
  FaArrowLeft,
} from "react-icons/fa";

const ResumeBlog = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300">

      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 px-5 py-3 rounded-2xl transition duration-300 shadow-md"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Hero Section */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>

            <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Career Growth
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6">
              How To Write A
              <span className="text-blue-500"> Technical Resume </span>
              That Stands Out 🚀
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-6">
              Learn how to create a professional technical resume that grabs
              recruiter attention, highlights your skills, and increases your
              chances of getting interviews in top tech companies.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-2xl font-semibold transition duration-300">
                Start Reading
              </button>

              <button className="border border-slate-400 dark:border-slate-600 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 px-7 py-3 rounded-2xl font-semibold transition duration-300">
                Resume Tips
              </button>

            </div>

          </div>

          {/* Right Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">

            <div className="flex items-center gap-4">
              <FaFileAlt className="text-5xl text-blue-500" />

              <div>
                <h2 className="text-2xl font-bold">
                  Technical Resume
                </h2>

                <p className="text-slate-500 dark:text-slate-400">
                  Professional Developer Resume
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">

              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                <h3 className="font-bold text-blue-500">
                  Skills
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  ReactJS, JavaScript, Tailwind CSS, NodeJS
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                <h3 className="font-bold text-blue-500">
                  Projects
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  NotesHub, Portfolio Website, Weather App
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                <h3 className="font-bold text-blue-500">
                  Experience
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  Frontend Internship & Freelance Projects
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Tips Section */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-20">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaUserTie className="text-5xl text-blue-500" />

            <h2 className="text-2xl font-bold mt-5">
              Strong Summary
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Write a short professional summary about your skills and goals.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCode className="text-5xl text-green-500" />

            <h2 className="text-2xl font-bold mt-5">
              Highlight Skills
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Mention relevant technologies and programming languages clearly.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaLaptopCode className="text-5xl text-cyan-500" />

            <h2 className="text-2xl font-bold mt-5">
              Add Projects
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Showcase real-world projects with technologies used and features.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCheckCircle className="text-5xl text-yellow-500" />

            <h2 className="text-2xl font-bold mt-5">
              ATS Friendly
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Use clean formatting and keywords for ATS optimization.
            </p>

          </div>

        </div>

        {/* Resume Structure */}
        <div className="mt-20 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[40px] p-8 md:p-14 shadow-2xl">

          <h2 className="text-4xl font-bold text-blue-500">
            Perfect Resume Structure 📄
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 mt-10">

            <div className="space-y-6">

              <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  1. Contact Information
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
                  Add your name, email, LinkedIn, GitHub, and portfolio links.
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  2. Technical Skills
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
                  Mention frontend, backend, tools, and programming languages.
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  3. Projects
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
                  Explain your projects with technologies and achievements.
                </p>
              </div>

            </div>

            <div className="space-y-6">

              <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  4. Education
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
                  Include degree, college name, and graduation year.
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  5. Experience
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
                  Add internships, freelance work, or open-source contributions.
                </p>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  6. Certifications
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
                  Mention courses and certificates related to technology.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Common Mistakes */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center text-blue-500">
            Common Resume Mistakes ❌
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-red-500">
                Avoid Long Paragraphs
              </h3>

              <p className="mt-4 text-slate-700 dark:text-slate-300 leading-8">
                Recruiters spend only a few seconds scanning resumes, so keep
                your points short and clear.
              </p>

            </div>

            <div className="bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-3xl p-8">

              <h3 className="text-2xl font-bold text-yellow-600">
                Don’t Add Irrelevant Skills
              </h3>

              <p className="mt-4 text-slate-700 dark:text-slate-300 leading-8">
                Mention only relevant technologies and experiences for the role.
              </p>

            </div>

          </div>

        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[40px] p-10 md:p-16 mt-24 text-center shadow-2xl">

          <FaLightbulb className="text-6xl text-white mx-auto" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-8">
            Build A Resume That Gets Interviews 🚀
          </h2>

          <p className="text-slate-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
            A strong technical resume can help you stand out from thousands of
            candidates and increase your chances of landing your dream tech job.
          </p>

          <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 mt-8 px-10 py-4 rounded-2xl font-bold text-lg">
            Explore More Career Blogs
          </button>

        </div>

      </div>
    </div>
  );
};

export default ResumeBlog;