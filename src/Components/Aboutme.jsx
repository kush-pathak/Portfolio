import React from 'react'

import aboutme from "../images/img2.jpeg"
import Social from './Social'
import resume from "../pages/about/Resume.pdf"

const Aboutme = ({ brand, email, location , availability , contact }) => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume
        link.download = "Shivam_Pathak_CV.pdf"
        link.onload = () => {
            link.remove();
        }
        document.body.appendChild(link);
        link.click();
    }
    return (
        <>
            <div className="aboutContainer container">
                <div className="row">
                    <img src={aboutme} className="rounded mx-auto d-block" style={{ width: "300px", height: "250px" }} alt="image" >
                    </img>

                    <div className="contentContainer">
                        <h4>Nice to Meet You</h4>
                        <h5>Enhancing Skills and Learning Technologies.</h5>

                        <div className="contentDescription">
                            <p>{brand}</p>
                        </div>

                        <div className="infoContainer">
                            <div className="row">
                                <div className="col-12 col-md-6 info">
                                    <span>
                                        Name:
                                    </span>
                                    <p>Shivam Pathak</p>
                                </div>

                                <div className="col-12 col-md-6 info">
                                    <span>
                                        Email:
                                    </span>
                                    <p>
                                        <a href={`mailto: ${email}`}>{email}</a>
                                    </p>
                                </div>

                                <div className="col-12 col-md-6 info">
                                    <span>
                                        Availability:
                                    </span>
                                    <p>
                                        {availability}
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 info">
                                    <span>
                                        Location:
                                    </span>
                                    <p>
                                        {location}
                                    </p>
                                </div>

                                <div className="col-12 col-md-6 info">
                                    <span>
                                        Contact:
                                    </span>
                                    <p>
                                        {contact}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="buttonContainer" >
                            <button className="btn downloadCV"  style={{backgroundColor:'blue' , color : 'white'}} onClick={handleDownload}>
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme
