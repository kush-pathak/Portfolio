import React from 'react'
import PageHeader from '../../Components/PageHeader'
import Projects from '../../Components/Projects'

const Portfolio = () => {
  return (
    <section className="portfolio" id = "portfolio">
        <PageHeader tittle = {"Projects"} description = {"Guys , Here are my major Projects of Web development and Machine Learning.."}/>
        <div className="row">
            <Projects/>
        </div>

    </section>
  )
}

export default Portfolio
