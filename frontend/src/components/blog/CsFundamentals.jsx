import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaDesktop,
  FaMicrochip,
  FaMemory,
  FaNetworkWired,
  FaCode,
  FaLaptopCode,
  FaArrowLeft,
  FaDatabase,
} from "react-icons/fa";

const ComputerFundamentalsBlog = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300 px-4 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 px-5 py-3 rounded-2xl transition duration-300 shadow-md"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Hero Section */}
        <div className="mt-10 bg-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 border border-slate-300 dark:border-slate-700 rounded-[40px] p-8 md:p-14 shadow-2xl overflow-hidden relative">

          {/* Background Blur */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <span className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Computer Science
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-8">
              Complete Guide To
              <span className="text-blue-500">
                {" "}Computer Fundamentals 🚀
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-6 max-w-4xl">
              Learn the basics of computers, hardware, software, memory,
              networking, operating systems, and programming fundamentals in a
              beginner-friendly and professional way.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-2xl font-semibold transition duration-300">
                Start Learning
              </button>

              <button className="border border-slate-400 dark:border-slate-600 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 px-7 py-3 rounded-2xl font-semibold transition duration-300">
                Explore Topics
              </button>

            </div>

          </div>

        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaDesktop className="text-5xl text-blue-500" />

            <h2 className="text-2xl font-bold mt-5">
              Hardware
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Learn about CPU, RAM, storage devices, motherboard, and computer
              components.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCode className="text-5xl text-green-500" />

            <h2 className="text-2xl font-bold mt-5">
              Software
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Understand system software, application software, and utilities.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaMemory className="text-5xl text-cyan-500" />

            <h2 className="text-2xl font-bold mt-5">
              Memory
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Learn primary memory, secondary memory, cache, and storage units.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaNetworkWired className="text-5xl text-yellow-500" />

            <h2 className="text-2xl font-bold mt-5">
              Networking
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-7">
              Explore computer networks, internet, protocols, and communication.
            </p>

          </div>

        </div>

        {/* About Fundamentals */}
        <div className="mt-20 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[40px] p-8 md:p-14 shadow-2xl">

          <h2 className="text-4xl font-bold text-blue-500">
            What Are Computer Fundamentals?
          </h2>

          <p className="text-slate-700 dark:text-slate-300 text-lg leading-9 mt-8">
            Computer Fundamentals refer to the basic concepts and components of
            computer systems. It includes understanding how computers work,
            different hardware components, operating systems, memory management,
            networking, and software applications.
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-9 mt-6">
            These concepts form the foundation of computer science and are very
            important for beginners, developers, and students preparing for
            technical interviews.
          </p>

        </div>

        {/* Main Topics */}
        <div className="mt-20">

          <h2 className="text-4xl font-bold text-center text-blue-500">
            Important Computer Fundamentals Topics 💻
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {[
              "Input & Output Devices",
              "CPU & Processing",
              "RAM & ROM",
              "Operating System",
              "Computer Networks",
              "Database Basics",
              "Programming Fundamentals",
              "Internet & Web",
              "Cyber Security Basics",
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {topic}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* Hardware & Software */}
        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-2xl">

            <FaMicrochip className="text-6xl text-blue-500" />

            <h2 className="text-3xl font-bold mt-6">
              Hardware
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-5">
              Hardware includes all physical components of a computer such as
              CPU, keyboard, mouse, monitor, motherboard, and storage devices.
            </p>

            <ul className="mt-6 space-y-4">

              <li className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                CPU - Brain of Computer
              </li>

              <li className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                RAM - Temporary Memory
              </li>

              <li className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                Storage - HDD & SSD
              </li>

            </ul>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-2xl">

            <FaLaptopCode className="text-6xl text-cyan-500" />

            <h2 className="text-3xl font-bold mt-6">
              Software
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-5">
              Software refers to programs and applications that run on a
              computer system and help users perform different tasks.
            </p>

            <ul className="mt-6 space-y-4">

              <li className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                Operating System
              </li>

              <li className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                Web Browsers
              </li>

              <li className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                Programming Software
              </li>

            </ul>

          </div>

        </div>

        {/* Networking */}
        <div className="mt-20 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[40px] p-8 md:p-14 shadow-2xl">

          <div className="flex items-center gap-4">

            <FaNetworkWired className="text-5xl text-blue-500" />

            <h2 className="text-4xl font-bold">
              Computer Networking 🌐
            </h2>

          </div>

          <p className="text-slate-700 dark:text-slate-300 text-lg leading-9 mt-8">
            Computer Networking allows computers to communicate and share
            resources with each other through wired or wireless connections.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-500">
                LAN
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Local Area Network
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-green-500">
                MAN
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Metropolitan Area Network
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold text-red-500">
                WAN
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Wide Area Network
              </p>
            </div>

          </div>

        </div>

        {/* Database */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[40px] p-10 md:p-16 shadow-2xl text-white">

          <FaDatabase className="text-6xl mx-auto" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-8">
            Why Learn Computer Fundamentals?
          </h2>

          <p className="text-lg leading-8 text-center max-w-4xl mx-auto mt-6">
            Computer Fundamentals help students and developers understand the
            core concepts behind software, hardware, networking, databases, and
            programming. These concepts are essential for interviews, academics,
            and professional software development.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold">
                Better Logic
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold">
                Strong Basics
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center">
              <h3 className="text-3xl font-bold">
                Career Growth
              </h3>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ComputerFundamentalsBlog;