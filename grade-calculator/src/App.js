import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
// import "./Home.scss";

function App() {
  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
