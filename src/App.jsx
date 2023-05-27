import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import NavBar from './components/NavBar';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
