import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function About() {
  return (
    <div className="about m-3">
      <div class="container cardBg ">
        <div id="code-container">
          <span className="keyword">const</span> jose = &#123; <br />
          <span className="property">frontend:</span> [
          <span className="string">React</span>,{" "}
          <span className="string">Javascript</span>,{" "}
          <span className="string">NodeJS</span>,{" "}
          <span className="string">CSS</span>,{" "}
          <span className="string">Bootstrap</span>], <br />
          <span className="property">backend:</span> [
          <span className="string">Express</span>,{" "}
          <span className="string">Node</span>,{" "}
          <span className="string">MySQL</span>],
          <br />
          <span className="property">testingDeployment:</span> [
          <span className="string">Jest</span>,{" "}
          <span className="string">Heroku</span>],
          <br />
          <span className="property">developerTools:</span> [
          <span className="string">Git</span>,{" "}
          <span className="string">Handlebars</span>],
          <br />
          <span className="property">education:</span> &#123; <br />
          <span className="property">universityOfUtah:</span>{" "}
          <span className="string">
            "Certificate in Full Stack Web Development"
          </span>
          &#125;
          <br /> &#125;;
        </div>
      </div>

      <div class="row pt-5 mt-5 bg-transparent">
        <div class="col-sm-6 bg-transparent">
          <div class="container cardBg">
            <div class="card-body bg-transparent">
              <h5 class="card-title bg-transparent">
                <span className="html"> &lt;h5&gt;</span>{" "}
                <span className="property"> Full Stack Web Developer </span>{" "}
                <span className="html">&lt;/h5&gt;</span>
              </h5>
              <p class="card-text">
                <span className="html"> &lt;p&gt;</span>{" "}
                <span className="property">
                  I am responsible for developing, creating, and testing
                  website.
                </span>
                <span className="html">&lt;p&gt; </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 bg-transparent">
          <div class="container cardBg">
            <div class="card-body bg-transparent">
              <h5 class="card-title bg-transparent">
                <span className="html"> &lt;h5&gt;</span>{" "}
                <span className="property">Web Design </span>{" "}
                <span className="html">&lt;/h5&gt;</span>
              </h5>
              <p class="card-text">
                <span className="html"> &lt;p&gt;</span>{" "}
                <span className="property">
                  I am responsible for bring websites to life and creating the
                  experience that users want.{" "}
                </span>
                <span className="html">&lt;p&gt; </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Portfolio() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4 bg-transparent">
      <div class="col bg-transparent">
        <div class="card container cardBg">
          <img
            src="placeholder.jpg"
            class="card-img-top bg-transparent"
            alt="..."
          ></img>
          <div class="card-body bg-transparent">
            <h5 class="card-title bg-transparent">Card title</h5>
            <p class="card-text bg-transparent">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col bg-transparent">
        <div class="card bg-transparent container cardBg">
          <img
            src="placeholder.jpg"
            class="card-img-top bg-transparent"
            alt="..."
          ></img>
          <div class="card-body bg-transparent">
            <h5 class="card-title bg-transparent">Card title</h5>
            <p class="card-text bg-transparent">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col bg-transparent">
        <div class="card container cardBg">
          <img
            src="placeholder.jpg"
            class="card-img-top bg-transparent"
            alt="..."
          ></img>
          <div class="card-body bg-transparent">
            <h5 class="card-title bg-transparent">Card title</h5>
            <p class="card-text bg-transparent">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>

      <div class="col bg-transparent">
        <div class="card container cardBg">
          <img src="placeholder.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="cardBg p-3">
      <Form className="mt-5">
        <Form.Group
          className="mb-3 bg-transparent"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="text-light bg-transparent">
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          className="mb-3 bg-transparent"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="text-light bg-transparent">Comment</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
        <Button variant="secondary">Submit</Button>{" "}
      </Form>
    </div>
  );
}

function App() {
  const [showAbout, setShowAbout] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowPortfolio(false);
    setShowContact(false);
  };

  const handlePortfolioClick = () => {
    setShowAbout(false);
    setShowPortfolio(true);
    setShowContact(false);
  };

  const handleContactClick = () => {
    setShowAbout(false);
    setShowPortfolio(false);
    setShowContact(true);
  };

  return (
    <div id="infoCard" class="card">
      <nav class="navbar">
        <form class="container-fluid justify-content-end">
          <button
            id="btn"
            class="btn btnAbout"
            type="button"
            onClick={handleAboutClick}
          >
            About
          </button>
          <button
            id="btn"
            class=" btn btnPortfolio"
            type="button"
            onClick={handlePortfolioClick}
          >
            Portfolio
          </button>
          <button
            id="btn"
            class=" btn btnContact"
            type="button"
            onClick={handleContactClick}
          >
            Contact
          </button>
        </form>
      </nav>
      <div id="root" class="card-body">
        {showAbout && <About />}
        {showPortfolio && <Portfolio />}
        {showContact && <Contact />}
      </div>
    </div>
  );
}

export default App;
