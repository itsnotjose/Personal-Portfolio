


import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <Router>
      <div className="p-4 ">
    <div className=" row row-cols-1 row-cols-md-2 g-4">
      <div className="h-100 container">
      <div className="col">
        <div className="h-50 text-center" id="main-card">
          <img className="me" src="me.png" alt="" />
          <h2 className="pt-5">Jose Orozco</h2>
          <p>Full stack developer</p>
  
          <ul className="fs-4 list-group list-group-flush">
            <li className="list-group-item">
              <img id="icon" src="phone.png" alt="" /> (801)-906-3166
            </li>
            <li className="list-group-item">
              <img id="icon" className="" src="at.png" alt="" />
              josearozco15@gmail.com
            </li>
            <li className="list-group-item">
              <img id="icon" className="" src="pin.png" alt="" />
              Utah, United States
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="container ">
      <div className="col ">
        <div id="infoCard" className=" h-75 card">
          <nav className="navbar">
            <form className="container-fluid justify-content-end">
              <Link to="/aboutMe">
                <button id="btn" className="btn btnAbout" type="button">
                  About
                </button>
              </Link>
              <Link to="/portfolio">
                <button id="btn" className="btn btnPortfolio" type="button">
                  Portfolio
                </button>
              </Link>
              <Link to="/contact">
                <button id="btn" className="btn btnContact" type="button">
                  Contact
                </button>
              </Link>
            </form>
          </nav>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutMe" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
      </div>
    </div>
    </div>
  </Router>
  
  );
}







export default App;