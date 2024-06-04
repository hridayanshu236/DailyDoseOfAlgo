import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'
import DashboardComponent from './components/Dashboard/Dashboard.jsx'
import Blog from './components/Blog/Blog.jsx'
import Quiz from './components/Quiz/Quiz.jsx'
import SignUp from './components/SignUp/Signup.jsx'
import Contact from './components/Contact/Contact.jsx'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />\
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/algorithms" element={<DashboardComponent />} />
      <Route path="/quizes" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/dashboard" element={<DashboardComponent />} />
      <Route path="/github/:username" element={<Github />} />
      <Route path="/algorithms/:name" element={<Blog />} />
      <Route path="/quiz/:name" element={<Quiz />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
