// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from './main-js/Home';
import Login from './main-js/login-js/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/login' element={<Login />} /> */}
    </Routes>
  );
}

export default App;
