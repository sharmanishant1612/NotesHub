import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaJava,
  FaCode,
  FaCube,
  FaArrowLeft,
  FaLaptopCode,
  FaShieldAlt,
  FaProjectDiagram,
  FaLayerGroup,
} from "react-icons/fa";

const OopsJavaBlog = () => {

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
        <div className="relative overflow-hidden mt-10 rounded-[40px] bg-gradient-to-br from-blue-600 via-cyan-600 to-slate-900 p-10 md:p-16 shadow-2xl">

          {/* Blur Effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <div className="flex flex-wrap gap-4">

              <span className="bg-white text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
                Java Programming
              </span>

              <span className="bg-slate-900/50 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm">
                OOPs Concepts
              </span>

            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-8">
              Object Oriented Programming
              <br />
              In Java ☕
            </h1>

            <p className="text-slate-100 text-lg leading-8 mt-6 max-w-4xl">
              Learn OOPs concepts in Java including Classes, Objects,
              Encapsulation, Inheritance, Polymorphism, and Abstraction with
              examples and modern explanations.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 px-8 py-4 rounded-2xl font-bold">
                Start Learning
              </button>

              <button className="border border-white/40 hover:bg-white/10 text-white transition duration-300 px-8 py-4 rounded-2xl font-bold">
                Explore Concepts
              </button>

            </div>

          </div>

        </div>

        {/* Intro Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCube className="text-5xl text-blue-500" />

            <h2 className="text-2xl font-bold mt-5">
              Classes
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Blueprint used to create objects in Java.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaProjectDiagram className="text-5xl text-green-500" />

            <h2 className="text-2xl font-bold mt-5">
              Objects
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Real-world entities created using classes.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaLayerGroup className="text-5xl text-cyan-500" />

            <h2 className="text-2xl font-bold mt-5">
              Inheritance
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Acquire properties from another class.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaShieldAlt className="text-5xl text-yellow-500" />

            <h2 className="text-2xl font-bold mt-5">
              Encapsulation
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Protect data using private variables and methods.
            </p>

          </div>

        </div>

        {/* About OOPs */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-2xl">

            <FaJava className="text-7xl text-orange-500" />

            <h2 className="text-4xl font-bold mt-8 text-blue-500">
              What is OOPs?
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-lg leading-9 mt-6">
              OOPs (Object Oriented Programming System) is a programming
              paradigm based on objects and classes. It helps developers create
              reusable, secure, and scalable applications.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-9 mt-6">
              Java follows OOPs principles which make code more organized and
              maintainable for large-scale software development.
            </p>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl font-bold">
                Reusability
              </h3>

              <p className="leading-8 mt-4">
                Reuse existing code using inheritance and classes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl font-bold">
                Security
              </h3>

              <p className="leading-8 mt-4">
                Encapsulation protects sensitive data from unauthorized access.
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-3xl font-bold">
                Flexibility
              </h3>

              <p className="leading-8 mt-4">
                Polymorphism allows methods to behave differently.
              </p>
            </div>

          </div>

        </div>

        {/* Four Pillars */}
        <div className="mt-20">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Four Pillars Of OOPs 🔥
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {[
              {
                title: "Encapsulation",
                desc: "Wrapping data and methods into a single unit.",
                color: "blue",
              },
              {
                title: "Inheritance",
                desc: "One class acquires properties of another class.",
                color: "green",
              },
              {
                title: "Polymorphism",
                desc: "Methods behave differently in different situations.",
                color: "cyan",
              },
              {
                title: "Abstraction",
                desc: "Hide implementation details and show functionality.",
                color: "yellow",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[30px] p-8 shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <h3 className={`text-3xl font-bold text-${item.color}-500`}>
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

            <FaLaptopCode className="text-5xl text-blue-500" />

            <h2 className="text-4xl font-bold">
              Java Class Example
            </h2>

          </div>

          <div className="bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-3xl p-6 mt-10 overflow-x-auto">

            <pre className="text-slate-800 dark:text-slate-300 text-sm md:text-base">
{`class Student {

  String name;
  int age;

  void display() {
    System.out.println(name);
    System.out.println(age);
  }

  public static void main(String[] args) {

    Student s1 = new Student();

    s1.name = "Rahul";
    s1.age = 20;

    s1.display();
  }
}
`}
            </pre>

          </div>

        </div>

        {/* Advantages */}
        <div className="mt-20">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Advantages Of OOPs 💡
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-xl">

              <h3 className="text-3xl font-bold">
                Better Code Structure
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                OOPs helps organize large applications into manageable classes.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-xl">

              <h3 className="text-3xl font-bold">
                Code Reusability
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                Inheritance reduces duplication and improves productivity.
              </p>

            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-8 shadow-xl">

              <h3 className="text-3xl font-bold">
                Easy Maintenance
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                Applications become scalable and easier to maintain.
              </p>

            </div>

          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 rounded-[45px] p-10 md:p-16 text-center shadow-2xl">

          <FaCode className="text-6xl text-white mx-auto" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-8">
            Master Java OOPs Concepts 🚀
          </h2>

          <p className="text-slate-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Learn Java OOPs step-by-step and build strong programming
            fundamentals for interviews, development, and real-world projects.
          </p>

          <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 mt-8 px-10 py-4 rounded-2xl font-bold text-lg">
            Explore More Java Blogs
          </button>

        </div>

      </div>
    </div>
  );
};

export default OopsJavaBlog;