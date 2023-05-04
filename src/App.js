import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import "./App.css";
import Header from './Components/Header';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Landing from './pages/landing/Landing';
import Skills from './Components/Skills';
import Footer  from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const personalDetails = {
    name : "Shivam Pathak",
    location: "Kanpur,UP",
    availability : "Available to work",
    brand : "Full Stack Developer",
    email : "shivam.pathak8948@gmail.com",
    contact : "8948092048"
  }
  return (
    <>
    <Header/>
    <Routes>
        <Route
          path="/"
          element={<Landing name={personalDetails.name} />}
        ></Route>
        <Route
          path="/about"
          element={
            <About
              name={personalDetails.name}
              location={personalDetails.location}
              availability={personalDetails.availability}
              brand={personalDetails.brand}
              email={personalDetails.email}
              contact = {personalDetails.contact}
            />
          }
        ></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>

        <Route path="/skills" element={<Skills />}></Route>

      </Routes>
      <Footer/>


    </>
  );
}

export default App;
