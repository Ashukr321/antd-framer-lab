import {Button} from 'antd';
import { Link } from 'react-router-dom';
const ComponentsPage = () => {
  return (
    <div style={{backgroundColor:"black", height:"auto", padding:"30px",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
      <Link to="/button">
        <Button>button</Button>
      </Link>
    </div>
  )
}

export default ComponentsPage