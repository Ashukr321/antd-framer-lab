import React from 'react'
import { Button } from 'antd'
const ButtonComp = () => {
  return (
    <>
      <ol style={{ display: "flex", gap: "30px", marginLeft: "30px", marginBottom: "20px" }}>
        <li>default * without attributed type </li>
        <li>primary</li>
        <li>dashed</li>
        <li>text</li>
        <li>link</li>
      </ol>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button>
          default button
        </Button>
        <Button type="primary" size=''>Primary</Button>
        <Button type="dashed" size=''>dashed</Button>
        <Button type='text'>text</Button>

        {/* // text work like button  */}
        <Button type='link'>Link</Button>
        {/* link : instead of using link or anchor we can use  button type link this behave like  a in prod. 
       this don't break the web accessibility 
      */}
        <Button>
          outlined
        </Button>
      </div>
    </>
  )
}

export default ButtonComp
