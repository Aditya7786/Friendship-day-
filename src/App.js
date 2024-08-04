import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputName from './components/InputName';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputName />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;
