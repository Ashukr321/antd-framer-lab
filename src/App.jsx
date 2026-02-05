import './App.css'
import { Routes, Route } from 'react-router-dom'
import ComponentsPage from './components'
import MainPage from './mainpage'
import ButtonPage from './pages/ButtonPage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/components" element={<ComponentsPage />} ></Route>
        <Route path="/button" element={<ButtonPage/>} ></Route>
      </Routes>
    </>
  )
}

export default App
