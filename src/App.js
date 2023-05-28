import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import Lesson from './pages/lesson';
 
function App() {
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