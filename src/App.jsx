import './App.css'
import LoginPage from './Scenes/Login';
import User from './Scenes/User';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Employee from './Scenes/Employee';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path='/user' element={<User/>}/>
            <Route path='/employee' element={<Employee/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
