

function Portfolio() {
    return (
      <div id="portfolio" class="row row-cols-1 row-cols-md-2 g-4 bg-transparent">
        <a href="https://github.com/itsnotjose/Weather-Dashboard">
        <div class="col  bg-transparent">
          <div class="card container cardBg">
            
            <img
              src="https://user-images.githubusercontent.com/115964908/229923643-5dacc1be-3189-430b-b820-78a3343fb4a0.png"
              class="card-img-top bg-transparent"
              alt="..."
            ></img>
            <div class="card-body bg-transparent">
              <h5 class="card-title bg-transparent">Weather App</h5>
              <p class="card-text bg-transparent">
              A simple weather app that retrieves weather information using OpenWeather API.              </p>
            </div>
          </div>
        </div>
        </a>
        <a href="https://github.com/itsnotjose/tech-blog">
        <div class="col bg-transparent">
          <div class="card bg-transparent container cardBg">
            <img
              src="https://user-images.githubusercontent.com/115964908/229935269-a7f4071b-f923-4d1f-88cf-5943feff772b.png"
              class="card-img-top bg-transparent"
              alt="..."
            ></img>
            <div class="card-body bg-transparent">
              <h5 class="card-title bg-transparent">Tech Blog</h5>
              <p class="card-text bg-transparent">
              Users can create an account, log in, and create posts that can be viewed by their peers. This app provides an easy way for people to share their thoughts, ideas, and experiences with others.              </p>
            </div>
          </div>
        </div>
        </a>
        <a className="bg-none" href="https://github.com/itsnotjose/Personal-Portfolio">
        <div class="col bg-transparent">
          <div class="card container cardBg">
            <img
              src="https://user-images.githubusercontent.com/115964908/229938906-1a571718-2a3b-4493-9daf-d208195a9354.png"
              class="card-img-top bg-transparent"
              alt="..."
            ></img>
            <div class="card-body bg-transparent">
              <h5 class="card-title bg-transparent">Personal Portfolio 2023 Draft 1</h5>
              <p class="card-text bg-transparent">
              This is a personal portfolio website that showcases my skills, projects, and experiences. It is designed to give potential employers and clients an idea of what I can do and what I have accomplished.
              </p>
            </div>
          </div>
        </div>
  </a>
  <a href="https://github.com/ZeroBitzz/lovecraftian-virtual-pet/edit/main/README.md">
        <div class="col bg-transparent">
          <div class="card container cardBg">
            <img src="https://user-images.githubusercontent.com/115964908/235322740-41ce77a2-974c-4aea-9351-c29a1c4a831e.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">lovecraftian virtual-pet</h5>
              <p class="card-text">
              Do you want a pet without all the responsibility of taking care of a biological lifeform? Then you have arrived at the right place.
              </p>
            </div>
          </div>
        </div>
        </a>
      </div>
    );
  }

  export default Portfolio;