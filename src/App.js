import {useState, useEffect} from 'react';


const App = () => {

    const [value, setValue] = useState(null);
    const [message, setMessage] = useState(null);

    const getMessages = async () => {

        console.log("Making API call.");

        const options = {
            method: "POST",
            body : JSON.stringify({
                message: value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }

        console.log(options);

        try {
            const response = await fetch("/api/completions", options);
            const data = await response.json();
            console.log(data);
            console.log("API call complete.");
            setMessage(data.choices[0].message);
        } catch (error) {
            console.log("There was an error.");
            console.error(error);
        }
    }

  return (
      <div className="app">
          <section className="side-bar">
              <button>+ New chat</button>
              <ul className="history">
                  <li>BLUGH</li>
              </ul>
              <nav>
                  <p>Made by Team 2sigma</p>
              </nav>
          </section>

          <section className="main">
              <h1>FakeGPT</h1>
              <ul className="feed">

              </ul>

              <div className="bottom-section">
                  <div className="input-container">
                      <input value={value} onChange={(e) => setValue(e.target.value)} />
                      <div id="submit" onClick={getMessages}>➢</div>
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
