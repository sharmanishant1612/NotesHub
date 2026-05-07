import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaGitAlt,
  FaCodeBranch,
  FaTerminal,
  FaCloudUploadAlt,
  FaLaptopCode,
  FaArrowLeft,
  FaFolderOpen,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const GitGithubBlog = () => {

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
        <div className="relative overflow-hidden mt-10 rounded-[45px] bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 p-10 md:p-16 shadow-2xl">

          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <div className="flex flex-wrap gap-4">

              <span className="bg-white text-blue-700 px-5 py-2 rounded-full text-sm font-bold">
                Version Control
              </span>

              <span className="bg-slate-900/40 text-white px-5 py-2 rounded-full text-sm backdrop-blur-md">
                Git & GitHub
              </span>

            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-8">
              Complete Guide To
              <br />
              Git & GitHub 🚀
            </h1>

            <p className="text-slate-100 text-lg leading-8 mt-6 max-w-4xl">
              Learn Git and GitHub from beginner to advanced including Git
              configuration, repositories, commits, branches, pushing code,
              cloning projects, and collaborating with developers.
            </p>

          </div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaGitAlt className="text-6xl text-orange-500" />

            <h2 className="text-2xl font-bold mt-5">
              Git
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Track changes in your project and manage versions.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaGithub className="text-6xl text-blue-500" />

            <h2 className="text-2xl font-bold mt-5">
              GitHub
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Store and share your code online with developers.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCodeBranch className="text-6xl text-cyan-500" />

            <h2 className="text-2xl font-bold mt-5">
              Branching
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Work on new features without affecting the main code.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-[35px] p-6 shadow-xl hover:-translate-y-2 transition duration-300">

            <FaCloudUploadAlt className="text-6xl text-green-500" />

            <h2 className="text-2xl font-bold mt-5">
              Deployment
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-7 mt-4">
              Push your projects online and showcase your work.
            </p>

          </div>

        </div>

        {/* What is Git */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800">

            <FaGitAlt className="text-7xl text-orange-500" />

            <h2 className="text-4xl font-extrabold mt-8 text-blue-500">
              What Is Git?
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-lg leading-9 mt-6">
              Git is a version control system that helps developers track code
              changes, manage project history, and collaborate with teams.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-9 mt-6">
              It allows developers to save snapshots of code and return to
              previous versions whenever needed.
            </p>

          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-[40px] p-8 shadow-2xl text-white">

            <FaGithub className="text-7xl" />

            <h2 className="text-4xl font-extrabold mt-8">
              What Is GitHub?
            </h2>

            <p className="text-lg leading-9 mt-6">
              GitHub is a cloud-based platform where developers store Git
              repositories online and collaborate with teams.
            </p>

            <p className="text-lg leading-9 mt-6">
              It is widely used for open-source projects, portfolios, and team
              collaboration.
            </p>

          </div>

        </div>

        {/* Git Installation */}
        <div className="mt-24 bg-white dark:bg-slate-900 rounded-[45px] p-10 md:p-14 shadow-2xl border border-slate-300 dark:border-slate-800">

          <div className="flex items-center gap-4">

            <FaTerminal className="text-5xl text-blue-500" />

            <h2 className="text-4xl font-extrabold">
              Configure Git On Your System ⚙️
            </h2>

          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg leading-8 mt-6">
            After installing Git, you need to configure your username and email.
          </p>

          <div className="bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-3xl p-6 mt-10 overflow-x-auto">

            <pre className="text-slate-800 dark:text-slate-300 text-sm md:text-base">
{`git config --global user.name "Your Name"

git config --global user.email "your@email.com"

git config --list
`}
            </pre>

          </div>

        </div>

        {/* Create Repo */}
        <div className="mt-24">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Create Your First Git Repository 📁
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-xl border border-slate-300 dark:border-slate-800">

              <FaFolderOpen className="text-6xl text-yellow-500" />

              <h3 className="text-3xl font-bold mt-6">
                Initialize Git
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                Open terminal inside your project folder and initialize Git.
              </p>

              <div className="bg-slate-100 dark:bg-slate-950 rounded-2xl p-5 mt-6 overflow-x-auto">
                <pre className="text-sm">
{`git init`}
                </pre>
              </div>

            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-xl border border-slate-300 dark:border-slate-800">

              <FaCheckCircle className="text-6xl text-green-500" />

              <h3 className="text-3xl font-bold mt-6">
                Add & Commit Files
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                Add files to staging area and create your first commit.
              </p>

              <div className="bg-slate-100 dark:bg-slate-950 rounded-2xl p-5 mt-6 overflow-x-auto">
                <pre className="text-sm">
{`git add .

git commit -m "First Commit"`}
                </pre>
              </div>

            </div>

          </div>

        </div>

        {/* Push Code */}
        <div className="mt-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 rounded-[45px] p-10 md:p-16 shadow-2xl text-white">

          <FaCloudUploadAlt className="text-7xl mx-auto" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-8">
            Push Code To GitHub 🚀
          </h2>

          <p className="text-lg leading-8 text-center max-w-4xl mx-auto mt-6">
            Follow these commands step-by-step to upload your project to GitHub.
          </p>

          <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 mt-12 overflow-x-auto">

            <pre className="text-slate-100 text-sm md:text-base">
{`# Connect local repo to GitHub

git remote add origin https://github.com/username/repository-name.git

# Push code to GitHub

git branch -M main

git push -u origin main
`}
            </pre>

          </div>

        </div>

        {/* Important Commands */}
        <div className="mt-24">

          <h2 className="text-5xl font-extrabold text-center text-blue-500">
            Important Git Commands 💻
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

            {[
              {
                cmd: "git status",
                desc: "Check current project status.",
              },
              {
                cmd: "git log",
                desc: "View commit history.",
              },
              {
                cmd: "git clone",
                desc: "Copy repository from GitHub.",
              },
              {
                cmd: "git pull",
                desc: "Fetch latest code from GitHub.",
              },
              {
                cmd: "git push",
                desc: "Upload code to GitHub.",
              },
              {
                cmd: "git branch",
                desc: "Manage project branches.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-xl border border-slate-300 dark:border-slate-800 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-3xl font-bold text-blue-500">
                  {item.cmd}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Why Learn */}
        <div className="mt-24 grid lg:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800">

            <h3 className="text-3xl font-bold text-blue-500">
              Team Collaboration
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
              Multiple developers can work together on projects efficiently.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800">

            <h3 className="text-3xl font-bold text-cyan-500">
              Portfolio Building
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
              Showcase your projects publicly on GitHub profile.
            </p>

          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[35px] p-8 shadow-2xl border border-slate-300 dark:border-slate-800">

            <h3 className="text-3xl font-bold text-green-500">
              Industry Standard
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-8 mt-5">
              Git and GitHub are used by developers worldwide.
            </p>

          </div>

        </div>

        {/* Final CTA */}
        <div className="mt-24 rounded-[45px] bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 p-10 md:p-16 text-center shadow-2xl">

          <FaRocket className="text-7xl text-white mx-auto" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-8">
            Master Git & GitHub 🚀
          </h2>

          <p className="text-slate-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Learn version control, manage projects professionally, collaborate
            with teams, and upload your projects on GitHub like a real
            developer.
          </p>

          <button className="bg-white text-blue-700 hover:bg-slate-200 transition duration-300 mt-8 px-10 py-4 rounded-2xl font-bold text-lg">
            Explore More Blogs
          </button>

        </div>

      </div>
    </div>
  );
};

export default GitGithubBlog;