import React from 'react'
import PageHeader from '../../Components/PageHeader'
import Aboutme from '../../Components/Aboutme'

const About = ({name,brand,availability,email,location,contact}) => {
  return (
    <section id="about" className="about">
      <PageHeader title = {"About Me"} description ={"I am Pursuing B.Tech CSE from Lovely professional University."}/>
      <Aboutme name = {name}  brand={brand} email={email}  contact = {contact} location={location} availability={availability} />
    </section>
  )
}

export default About
