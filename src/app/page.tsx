import Header from "../components/header"
import Home from "../components/home"
import Skills from "../components/skills"
import Project from "../components/project"
import ContactForm from "../components/contactform"
import Footer from "../components/footer"



import React from 'react'

const page = () => {
  return (
    <><Header />
    <Home/>
    <Skills/>
    <Project/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default page