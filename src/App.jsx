import './App.css'
import { Routes, Route } from 'react-router-dom'
import ComponentsPage from './components'
import MainPage from './mainpage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/components" element={<ComponentsPage />} ></Route>
      </Routes>
    </>
  )
}

export default App
