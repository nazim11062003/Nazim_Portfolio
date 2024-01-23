"use client"
import React from 'react'
import Home from '@/Component/Home'
import About from '@/Component/About'
import Contact from '@/Component/Contact'
import Project from '@/Component/Project'
import Skills from '@/Component/Skills'
const page = () => {
  return (
    <>
      <Home/>
      <Skills/>
      <Project/>
      <About/>
      <Contact/>
    </>
  )
}

export default page

