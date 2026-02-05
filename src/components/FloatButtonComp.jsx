import { Button, FloatButton } from 'antd'
import { QuestionCircleFilled, CustomerServiceOutlined, BellFilled } from '@ant-design/icons'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
const FloatButtonComp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("form submited successfully!");

    } catch (error) {
      console.log(error.message);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {/*   global components that can use over the components  */}
      {/* position is fixed  */}

      {/* <FloatButton icon={<QuestionCircleFilled/>} tooltip={{
        title:"example of title",
        color:"orange",
        placement:"bottom"
      }}></FloatButton>  */}

      {/* lets create the floated */}
      <FloatButton.Group shape='circle' >
        {/* <FloatButton type='primary'  style={{backgroundColor:"orange",insetInlineEnd:20}} icon={<QuestionCircleFilled/>} /> */}
        {/* <FloatButton content="hello" icon={<QuestionCircleFilled/>} /> */}
        <FloatButton icon={<QuestionCircleFilled />} />

      </FloatButton.Group>

      {/*FloatedButton menu mode  */}
      {/* <FloatButton.Group
        trigger='click'
        shape='square'
        icon={<CustomerServiceOutlined/>}
       >
        <FloatButton icon={<CustomerServiceOutlined/>}/>
        <FloatButton icon={<CustomerServiceOutlined/>}/>
       </FloatButton.Group> */}

      {/* <section style={{height:"300vh",backgroundColor:"orange"}}>
        <FloatButton.BackTop />
       </section> */}
      <div style={{ marginTop: "30px", paddingLeft: "30px" }}>
        <FloatButton style={{
          position: "relative",
          insetBlockEnd: "auto",
          insetBlockStart: "auto",
          width: 32,
          height: 32

        }} badge={{ count: 10 }} icon={<BellFilled />} />
      </div>

        <br />
      <Button style={{width:"120px"}} type='primary' loading={isLoading} onClick={handleSubmit} >
        {isLoading ? "submitting..." : "submit"}
      </Button>
    </div>
  )
}

export default FloatButtonComp
