const App = () => {

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      // this fetch url needs to be changed to the correct route for the backend
      const response = await fetch('http://localhost:8000/completions', options)
      const data = response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>BLUGH</li>
        </ul>
        <nav>
          <p>2Sigma ChatGPT Team</p>
        </nav>
      </section>
      <section className="main">
        <h1>FakeGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
            2Sigma Team - React ChatGPT Clone. Free Research Preview. Our goal is to make an AI tutor that is natural and safe to interact with.
            Your feedback will help us improve. This app leverages OpenAI's API to interact with the GPT 3.5 Turbo Model.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App