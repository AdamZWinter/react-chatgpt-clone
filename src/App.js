import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import Lesson from './pages/lesson';
 
function App() {

<<<<<<< HEAD


const App = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createNewChat = () => {
    setMessage(null);
    setValue('');
    setCurrentTitle(null);
  };

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
      setPreviousChats((prevChats) => [
        ...prevChats,
        { title: currentTitle, role: "user", content: value },
        { title: currentTitle, role: message.role, content: message.content }
      ]);
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
=======
  const [lesson, setLesson] = useState('testLessonState');
>>>>>>> 53ac49f6675599066a3a71eb1951af2a9e0402c3

  return (
      <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/lesson' element={<Lesson />} />
          </Routes>
      </Router>
  );
}
 
export default App;