import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import Lesson from './pages/lesson';
 
function App() {

  const [lesson, setLesson] = useState('testLessonState');

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