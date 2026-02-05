import { Button } from "antd"
import { Link } from "react-router-dom"


const MainPage = () => {
  return (
    <>
      <div style={{backgroundColor:"black", height:"100vh",width:"100%", display:"flex",justifyContent:"center", padding:"30px"}}>
        <Link to="/components">
          <Button >
            le't try
          </Button>
        </Link >
      </div >

    </>

  )
}

export default MainPage