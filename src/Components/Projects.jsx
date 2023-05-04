import React from 'react'

const Projects = () => {
  return (
    <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Portfolio</h5>
        <p className="card-text">Portfolio is something that showcases your work, skills, and achievements. It serves as a digital resume or a visual representation of one's professional profile. <br />
        Technology used : <strong>React JS</strong> </p>
        <a href="https://github.com/kush-pathak/portfolio" target='_blank' className="btn btn-primary">Source Code</a>
        <a href="https://shivam-pathak-portfolio.netlify.app/" target='_blank' className="btn btn-success">Website</a>
      </div>
    </div>
  </div>


  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">To-Do List</h5>
        <p className="card-text">Todo list is implemented using React JS . Objective was to learn React JS by implementing todo list.
        <br /> Technology used : <strong>React JS</strong></p>
        <a href="https://github.com/kush-pathak/To-do-list" target='_blank' className="btn btn-primary">Source Code</a>
        <a href="https://to-do-list-by-shivam.netlify.app/" target='_blank' className="btn btn-success">Website</a>

      </div>
    </div>
  </div>

  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">E-commerce Website</h5>
        <p className="card-text">This website is implemented by simply using basics of web development that is HTML,CSS and Javascript. <br />Technology used : <strong> HTML,CSS,Javascript</strong></p>
        <a href="https://github.com/kush-pathak/E-commerce-website" target='_blank' className="btn btn-primary">Source Code</a>
        <a href="https://e-commerce-website-by-shivam.netlify.app/" target='_blank' className="btn btn-success">Website</a>
      </div>
    </div>
  </div>

  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Wine Quality Detection</h5>
        <p className="card-text">In this Project , objective was to detect wine quality using various chemical components  of wine . I have taken dataset for the same from kaggle.
        <br /> Technology used : <strong>Python , Machine Learning</strong></p>
        <a href="https://github.com/kush-pathak/ShivamPathak123" target='_blank' className="btn btn-primary">Source Code</a>
      </div>
    </div>
  </div>


</div>
  )
}

export default Projects
