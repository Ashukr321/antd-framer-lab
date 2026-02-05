import { Link } from "react-router-dom"


const MainPage = () => {
  return (
    <>
      <h1 style={{ color: "white", backgroundColor: "black", textAlign: "left", position: "absolute", left: "30px",top:"30px" }}>Practice makes perfect</h1>

      <div style={{ width: "100%", height: "100vh", display: "flex", justifyCmontent: "center", alignItems: "center", backgroundColor: "black" }}>
        <Link to="/components">
          <button style={{ padding: "10px 20px", fontSize: "20px", fontWeight: "bold", cursor: "pointer", borderRadius: "5px", border: "none", backgroundColor: "white", color: "black" }}>
            practice makes perfect
          </button>
        </Link >
      </div >
      
    </>

  )
}

export default MainPage