import Carousel from "react-bootstrap/Carousel";

import c from '../skillset/c.png';
import cpp from '../skillset/cpp.png';
import python from '../skillset/python.png';
import html from '../skillset/html.png';
import css from '../skillset/css.png';
import javascript from '../skillset/javascript.png';
import react from '../skillset/react.png';
import dsa from '../skillset/dsa.png';
import dbms from '../skillset/dbms.png';
import oop from '../skillset/oop.png';

import "./skill.css";



function Skills() {


  const heading = {
    display: "block",
    position: "static",
    padding: "10px",
    textAlign: "center",
    margin: "auto",
    border: "4px solid black",
    backgroundColor: 'white',
    borderRadius: "30px",
    width: "fit-content",
    boxSizing: "border-box",
    verticalAlign: "middle",
    color: "black",
    fontWeight: "1500",
    color :"black"
  };
  
  return (
    <>
      <Carousel>
  <Carousel.Item>
    <Carousel.Caption style={heading}>
      <h1 >PROGRAMMING LANGUAGES</h1>
    </Carousel.Caption>

    <ul style={{ display: 'flex' ,flexWrap: 'wrap',listStyleType: "none", justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <li style={{ margin: '0 30px', marginBottom: '50px' }}>
        <img
          style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '#0dcaf0 0px 0px 10px' }}
          src={c}
          alt="C"
        />
        <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>C</h3>
      </li>
      <li style={{ margin: '0 30px', marginBottom: '50px' }}>
        <img
          style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '#0dcaf0 0px 0px 10px' }}
          src={cpp}
          alt="C++"
        />
        <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>C++</h3>
      </li>
      <li style={{ margin: '0 30px', marginBottom: '50px' }}>
        <img
          style={{ width: '200px', height: '200px', borderRadius: '22%', boxShadow: '#0dcaf0 0px 0px 10px' }}
          src={python}
          alt="Python"
        />
        <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>Python</h3>
      </li>
    </ul>
  </Carousel.Item>


  <Carousel.Item>
  <Carousel.Caption style={heading}>
    <h1 >WEB DEVELOPMENT</h1>
  </Carousel.Caption>
  <ul style={{ display: 'flex' ,flexWrap: 'wrap',listStyleType: "none", justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
    <li style={{ margin: '0 30px', marginBottom: '50px' }}>
      <img
        className="d-block "
        style={{ width: '200px', height: '200px', borderRadius: '30%', boxShadow: '#0dcaf0 0px 0px 10px' }}
        src={html}
        alt="HTML"
      />
      <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>HTML</h3>
    </li>
    <li style={{ margin: '0 30px', marginBottom: '50px' }}>
      <img
        className="d-block "
        style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '#0dcaf0 0px 0px 10px' }}
        src={css}
        alt="CSS"
      />
      <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>CSS</h3>
    </li>
    <li style={{ margin: '0 30px', marginBottom: '50px' }}>
      <img
        className="d-block "
        style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '#0dcaf0 0px 0px 10px' }}
        src={javascript}
        alt="Javascript"
      />
      <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>Javascript</h3>
    </li>
    <li style={{ margin: '0 30px', marginBottom: '50px' }}>
      <img
        className="d-block "
        style={{ width: '200px', height: '200px', borderRadius: '25%', boxShadow: '#0dcaf0 0px 0px 10px' }}
        src={react}
        alt="React JS"
      />
      <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>React JS</h3>
    </li>
  </ul>
</Carousel.Item>


        <Carousel.Item>
          
        <Carousel.Caption style={heading}>
      <h1 >CORE</h1>
    </Carousel.Caption>

    <ul style={{ display: 'flex' ,flexWrap: 'wrap',listStyleType: "none", justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <li style={{ margin: '0 30px', marginBottom: '50px' }}>
        <img
          style={{ width: '200px', height: '200px', borderRadius: '40%', boxShadow: '#0dcaf0 0px 0px 10px' }}
          src={dsa}
          alt="Data Structure and Algorithm"
        />
        <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>DSA</h3>
      </li>
      <li style={{ margin: '0 30px', marginBottom: '50px' }}>
        <img
          style={{ width: '200px', height: '200px', borderRadius: '50%', boxShadow: '#0dcaf0 0px 0px 10px' }}
          src={dbms}
          alt="Database Management System"
        />
        <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>DBMS</h3>
      </li>
      <li style={{ margin: '0 30px', marginBottom: '50px' }}>
        <img
          style={{ width: '200px', height: '200px', borderRadius: '25%', boxShadow: '#0dcaf0 0px 0px 10px' }}
          src={oop}
          alt="Object Oriented Programming"
        />
        <h3 style={{ textAlign: 'center', fontFamily: 'unset', fontSize: '30px', color: '#fcfcfc', marginTop: '10px' }}>OPPs</h3>
      </li>
    </ul>        </Carousel.Item>

      </Carousel>

    </>
  );
}

export default Skills;
