import React from 'react'
import ButtonComp from '../components/buttonComp'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';
const ButtonPage = () => {
  const navigate = useNavigate();
  return (
    
    <div style={{padding:"20px"}}>
      
      <Button onClick={()=>navigate(-1)} type="primary" style={{marginBottom:"20px"}}>
        Back
      </Button>
      
      <br />
      <ButtonComp/>
    </div>
  )
}

export default ButtonPage
