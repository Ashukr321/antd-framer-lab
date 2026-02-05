import {  FloatButton } from 'antd'
import { QuestionCircleFilled } from '@ant-design/icons'
const FloatButtonComp = () => {
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
       <FloatButton icon={<QuestionCircleFilled/>} />
      </FloatButton.Group>
    </div>
  )
}

export default FloatButtonComp
