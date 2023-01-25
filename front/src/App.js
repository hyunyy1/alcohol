// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login/Login';
import Mypage from './views/Mypage/Mypage'
import Map from './views/Map/Map';
import SignUp from './views/SignUp/SignUp';
import IdLogin from "./views/Login/IdLogin";
import WriteReview from "./views/CreateReview/CreateReview";

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/mypage' element={<Mypage />} />
      <Route path='/map' element={<Map />} />
      <Route path='/idlogin' element={<IdLogin />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/writereview' element={<WriteReview />} />
    </Routes>
  );
}

export default App;
