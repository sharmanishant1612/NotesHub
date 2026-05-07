import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Blog from './components/blog/blog.jsx'
import Contact from './components/contact/contact.jsx'
import Notes from './components/notes/notes.jsx'
import Layout from './components/layout.jsx'
import Resource from './components/resource/resource.jsx'
import LoginPage from './components/login/Login.jsx'
import SignupPage from './components/login/Signup.jsx'
import Profile from './components/login/Profile.jsx'
import Authprovider from './components/authProvider/AuthProvider.jsx'
import Protectroute from './components/ProtectRoute/ProtectRoute.jsx'
import ReactBlog from './components/blog/Reactjs.jsx'
import DsaBlog from './components/blog/DsaBlog.jsx'
import ResumeBlog from './components/blog/TechnicalResume.jsx'
import ComputerFundamentalsBlog from './components/blog/CsFundamentals.jsx'
import OopsJavaBlog from './components/blog/OopswithJava.jsx'
import FirstWebsiteBlog from './components/blog/HowToCreateWebsite.jsx'
import SoftwareEngineeringBlog from './components/blog/SoftwareEngineeinr.jsx'
import GitGithubBlog from './components/blog/Github.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "notes",
        element:(
          <Protectroute>
            <Notes/>
          </Protectroute>
        )
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "resource",
        element: <Resource/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "signup",
        element: <SignupPage/>
      },
      {
        path: "profile",
        element:(
          <Protectroute>
            <Profile/>
          </Protectroute>
        )
      },
      {
        path: "Blog/React-Blog",
        element: <ReactBlog/>
      },
      {
        path: "*",
        element: <DsaBlog/>
      },
      {
        path: "Blog/Resume-Blog",
        element: <ResumeBlog/>
      },
      {
        path: "Blog/CSFundamntal_Blog",
        element: <ComputerFundamentalsBlog/>
      },
      {
        path: "Blog/OOPS-Blog",
        element: <OopsJavaBlog/>
      },
      {
        path: "Blog/Frontend-Blog",
        element: <FirstWebsiteBlog/>
      },
      {
        path: "Blog/SE-Blog",
        element: <SoftwareEngineeringBlog/>
      },
      {
        path: "Blog/Git-Blog",
        element: <GitGithubBlog/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}/>
    </Authprovider>
  </StrictMode>,
)
