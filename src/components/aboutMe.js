

function About() {
    return (
      <div className=" about m-3">
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

  export default About;