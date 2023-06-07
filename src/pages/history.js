import React from 'react';
// import { useState, useEffect } from 'react';


const History = () => {


  return (
    <div className="app">
      <section className="side-bar">
        <nav>
          <p>2Sigma ChatGPT Team</p>
        </nav>
      </section>

      <section className="main">
        <h1>Chat History</h1>
        {/* <h1>Please choose a lesson plan.</h1>
        <h3 className="lessons" ><a className="blackText" href="lesson?lesson=arrays">2D Arrays</a></h3>
        <h3 className="lessons" ><a className="blackText" href="lesson?lesson=civilwar">The History of the American Cival War</a></h3>
        <h3 className="lessons" ><a className="blackText" href="lesson?lesson=philosophy">Philosophy: Trancendentalism vs Romanticism</a></h3>
        <h3 className="lessons" ><a className="blackText" href="lesson?lesson=shakespeare">Shakespeare 101: Why do we still talk about William Shakespeare?</a></h3> */}
        

        <div className="bottom-section">
          <div className="input-container">
          
          </div>
          <p className="info">
            2Sigma React ChatGPT Clone. This app leverages OpenAI's API to interact with the GPT 3.5 Turbo Model.
            Your feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  );
};

export default History;