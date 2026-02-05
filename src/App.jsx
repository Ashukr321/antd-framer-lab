import './App.css'
import { Routes, Route } from 'react-router-dom'
import ComponentsPage from './components'
import MainPage from './mainpage'
import ButtonPage from './pages/ButtonPage'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from 'antd'
function App() {
  const navigate = useNavigate();
  const path = useLocation();
  console.log(path);
  return (
    <>
      {
        path.pathname !== "/" && <nav style={{ backgroundColor: "black", padding: "20px" }}>
          <Button type='primary' style={{ padding: "20px 30px" }} onClick={() => navigate(-1)} >Back</Button>
        </nav>
      }


      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/components" element={<ComponentsPage />} ></Route>
        <Route path="/button" element={<ButtonPage />} ></Route>
      </Routes>
    </>
  )
}

export default App
