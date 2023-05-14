const App = () => {
  return (
      <div className="app">
          <section className="side-bar">
              <button>+ New chat</button>
              <ul className="history">
                  <li>BLUGH</li>
              </ul>
              <nav>
                  <p>Made by Stewart Lovell</p>
              </nav>
          </section>

          <section className="main">
              <h1>FakeGPT</h1>
              <ul className="feed">

              </ul>

              <div className="bottom-section">
                  <div className="input-container">
                      <input/>
                      <div id="submit">➢</div>
                  </div>
                  <p className="info">
                      GPT 3.5 Turbo Model. Free Research Preview. Our goal is to make AI
                      systems more natural and safe to interact with. Your feedback will help us improve.
                  </p>
              </div>
          </section>
      </div>
  );
}

export default App;
