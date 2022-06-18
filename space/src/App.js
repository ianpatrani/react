import './App.css';

function App() {
  return (
    <div className="container">

      <nav>
        <div className="img"></div>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <div className="navButtons">
          <a className="a activo" href="#">00 HOME</a>
          <a className="a" href="#">01 DESTINATION</a>
          <a className="a" href="#">02 CREW</a>
          <a className="a" href="#">03 TECHNOLOGY</a>
        </div>
      </nav>

      <section className="home">
        <div className="homeLeft">
          <h2> So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        <div className="homeRight">
          <button>Explore</button>
        </div>
        </div>
      </section>

    </div>
  );
}

export default App;
