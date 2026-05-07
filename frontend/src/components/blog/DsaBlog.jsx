import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaDatabase,
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

const DsaBlog = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 px-4 py-10 transition-colors duration-300">

      <div className="max-w-7xl mx-auto">

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
              Programming
            </span>

            <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-5 py-2 rounded-full text-sm">
              Data Structures & Algorithms
            </span>

          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mt-8 leading-tight">
            Complete Data Structures Guide 🚀
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-6 max-w-4xl">
            Master Data Structures and Algorithms from basics to advanced and
            improve your coding, problem-solving, and interview preparation
            skills for top tech companies.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-7 py-3 rounded-2xl font-semibold text-white">
              Start Learning
            </button>

            <button className="border border-slate-400 dark:border-slate-600 hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 px-7 py-3 rounded-2xl font-semibold">
              Practice DSA
            </button>

          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <FaDatabase className="text-5xl text-blue-500" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              Arrays
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Learn indexing, traversal, sorting, and searching techniques.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <FaProjectDiagram className="text-5xl text-green-400" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              Linked List
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Understand nodes, pointers, insertion, and deletion operations.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <FaCode className="text-5xl text-yellow-400" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              Algorithms
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Improve problem-solving using efficient algorithms.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <FaBrain className="text-5xl text-cyan-400" />

            <h2 className="text-2xl font-bold mt-5 text-slate-900 dark:text-white">
              Logic Building
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mt-3 leading-7">
              Strengthen coding logic and analytical thinking.
            </p>
          </div>

        </div>

        {/* About DSA */}
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 mt-14 shadow-xl">

          <h2 className="text-4xl font-bold text-blue-500">
            What is Data Structure?
          </h2>

          <p className="text-slate-700 dark:text-slate-300 leading-9 text-lg mt-6">
            A Data Structure is a method of organizing and storing data so it
            can be accessed, modified, and processed efficiently. Choosing the
            correct data structure improves application performance and memory
            optimization.
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-9 text-lg mt-6">
            Algorithms are step-by-step instructions used to solve specific
            problems. Together, DSA forms the foundation of software
            engineering, competitive programming, and technical interviews.
          </p>

        </div>

        {/* Why Learn DSA */}
        <div className="mt-14">

          <h2 className="text-4xl font-bold text-center text-blue-500">
            Why Learn DSA?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Crack Coding Interviews
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                Top tech companies ask DSA-based coding problems in interviews.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Better Problem Solving
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                DSA improves analytical thinking and logical reasoning skills.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Write Optimized Code
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                Learn how to reduce time complexity and memory usage.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Competitive Programming
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-4 leading-8">
                DSA is the backbone of coding contests and online judges.
              </p>
            </div>

          </div>

        </div>

        {/* Code Example */}
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 mt-14 shadow-xl">

          <div className="flex items-center gap-4">
            <FaLaptopCode className="text-4xl text-blue-500" />

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Array Traversal Example
            </h2>
          </div>

          <div className="bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl p-6 mt-8 overflow-x-auto">

            <pre className="text-slate-800 dark:text-slate-300 text-sm md:text-base">
{`#include <iostream>
using namespace std;

int main() {

  int arr[] = {10, 20, 30, 40, 50};

  for(int i = 0; i < 5; i++) {
    cout << arr[i] << " ";
  }

  return 0;
}
`}
            </pre>

          </div>

        </div>

        {/* Important Topics */}
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 mt-14 shadow-xl">

          <h2 className="text-4xl font-bold text-blue-500">
            Important DSA Topics
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {[
              "Arrays",
              "Linked Lists",
              "Stacks",
              "Queues",
              "Trees",
              "Graphs",
              "HashMaps",
              "Recursion",
              "Dynamic Programming",
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {topic}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* Time Complexity */}
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl p-8 mt-14 shadow-xl">

          <div className="flex items-center gap-4">
            <FaChartLine className="text-4xl text-blue-500" />

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Time Complexity
            </h2>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-9 text-lg mt-6">
            Time Complexity measures how efficiently an algorithm performs as
            input size increases. It is represented using Big O notation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-green-500">
                O(1)
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Constant Time
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-yellow-500">
                O(log n)
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Logarithmic Time
              </p>
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-red-500">
                O(n)
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mt-3">
                Linear Time
              </p>
            </div>

          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 mt-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to Master DSA?
          </h2>

          <p className="text-slate-100 text-lg mt-5 max-w-3xl mx-auto leading-8">
            Practice consistently and improve your coding interview preparation
            with Data Structures and Algorithms.
          </p>

          <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 mt-8 px-8 py-4 rounded-2xl font-bold text-lg">
            Start Practicing
          </button>

        </div>

      </div>
    </div>
  );
};

export default DsaBlog;