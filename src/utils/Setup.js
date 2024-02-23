import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import ForgotPassword from '../pages/ForgotPassword';

const Setup = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ForgotPassword/>} />
      </Routes>
    </Router>
  )
}

export default Setup