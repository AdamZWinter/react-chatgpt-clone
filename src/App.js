const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
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
            <input></input>
            <div id="submit">➢</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App