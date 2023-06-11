import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";

const Lesson = () => {
  const myRef = React.createRef();
    const [queryParameters] = useSearchParams();
    const lesson = queryParameters.get("lesson");
    const initialized = useRef(false)

  let lessonString = '';
    if(lesson === "arrays"){
        lessonString = "Two-Dimensional Arrays";
    }
    if(lesson === "civilwar"){
        lessonString = "The History of the American Civil War";
    }
    if(lesson === "philosophy"){
        lessonString = "Philosophy: Trancendentalism vs Romanticism";
    }
    if(lesson === "shakespeare"){
        lessonString = "Shakespeare 101: Why do we still talk about William Shakespeare?";
    }

    const [value, setValue] = useState(lessonString);


  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(()=>{
    myRef.current.scrollIntoView({ behavior: "smooth" });
    //myRef.current.focus();
  },[scrollPosition, message, isLoading, currentTitle])

  useEffect(()=>{
    if (!initialized.current) {
        initialized.current = true
        setIsLoading(true);
        getMessages(); // Call your submit function
        setIsLoading(false);
    }
  },[])

  let navigate = useNavigate();

  const createNewChat = () => {
    let path = "/"; 
    navigate(path);
    //setMessage(null);
    //setValue('');
    //setCurrentTitle(null);
  };

  //this was for when a new chat would be listed in the left column
  //each new chat was a unique title
  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue('');
  };

  const getMessages = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch("/api/completions", options);
      const data = await response.json();
      console.log(data);
      setMessage(data);
    } catch (error) {
      console.log("There was an error.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }
    if (currentTitle && value && message) {
        //message.content = message.content.replace(/(?:\r\n|\r|\n)/g, '<br>');  //this did not work
      setPreviousChats((prevChats) => [
        ...prevChats,
        { title: currentTitle, role: "user", content: value },
        { title: currentTitle, role: message.role, content: message.content }
      ]);
      setValue('');
    }
  }, [message, currentTitle]);

  useEffect(() => {
    return () => {
        fetch('/reset', { method: 'GET' })
        .then(res => console.log(res))
        .catch(err => console.error(err));
    };
    }, []);

    const sendApiRequest = async () => {
    try {
        const response = await fetch('/reset', {
        method: 'POST',
        // Include necessary headers and request payload
        });
        // Handle the response as needed
    } catch (error) {
        console.error('Error sending API request:', error);
    }
    };

  useEffect(() => {
      const handleBeforeUnload = async () => {
      await sendApiRequest();
      };

      const handleUnload = async () => {
      await sendApiRequest();
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('unload', handleUnload);

      return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleUnload);
      };
    }, []);



    //console.log(previousChats);

    const currentChat = previousChats.filter(
        (previousChat) => previousChat.title === currentTitle
    );
    const uniqueTitles = Array.from(
        new Set(previousChats.map((previousChat) => previousChat.title))
    );
    //console.log(uniqueTitles);
    
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={createNewChat}>+ New chat</button>
        <ul className="history">
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li key={index} onClick={() => handleClick(uniqueTitle)}>
              {uniqueTitle}
            </li>
          ))}
        </ul>
        <nav>
          <p>2Sigma ChatGPT Team</p>
        </nav>
      </section>

      <section className="main">
        <p>Lesson: {lesson}</p>

        {!currentTitle && <h1>Loading.......</h1>}

        <ul className="feed">
        {currentChat?.slice(1).map((chatMessage, index) => (
          <li key={index} className={chatMessage.role}>  
            <p className="role">{chatMessage.role}</p>
            <p className='chatResponse'>{chatMessage.content}</p>
          </li>   
        ))}
        {/* <li autoFocus id="bottomli" ref={myRef}></li> */}
        {/* <li id="bottomli">...</li> */}
        <div autoFocus id="bottomli" ref={myRef}></div>
        </ul>


        <div className="bottom-section">
          <div className="input-container">
          
            <form
              onSubmit={async (e) => {
                e.preventDefault(); // Prevent the default form submission
                setIsLoading(true);
                await getMessages(); // Call your submit function
                setIsLoading(false);
                //setScrollPosition(true);
                await delay(250);
                setScrollPosition(!scrollPosition);
                }
              }
            >
              <input
                className = "promptInput"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

              <button id="submit" type="submit" >
              {isLoading ? "loading..." : "➢"}
              </button>

            </form>
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

export default Lesson;