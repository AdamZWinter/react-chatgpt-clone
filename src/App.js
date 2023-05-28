import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Lesson from './pages/lesson';
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Lesson />} />
            </Routes>
        </Router>
    );
}
 
export default App;