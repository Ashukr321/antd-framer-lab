import React from 'react'
import ButtonComp from '../components/buttonComp'
import { Button } from 'antd';
import FloatButtonComp from '../components/FloatButtonComp';
const ButtonPage = () => {
  return (

    <div style={{ padding: "20px" }}>
      <br />
      <div style={{marginBottom:"10px"}}>
        <ButtonComp />
      </div>
      <div>
        <p style={{fontWeight:"bold"}}>FloatButton</p>

        <div>
          <FloatButtonComp/>
        </div>
      </div>
    </div>
  )
}

export default ButtonPage
