import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Learning" element={<LearningComponentSection/>}/>
    </Routes>
    </>
  );
}

export default App;
