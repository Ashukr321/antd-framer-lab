import React from 'react'
import { Space, Typography } from 'antd';
const { Text, Link, Paragraph } = Typography;
const TypographyComp = () => {
    return (
        <div style={{
            padding: "20px",
        }}>
            <Text > Ant default </Text>
            <br />
            <Text type='success'>ant design success</Text>
            <br />
            <Text type='secondary'>this is the primary text</Text>
            {/* secondary is look like gray text  */}
            <br />
            <Text type='warning'> this is warning text</Text>
            <br />
            <Text type='danger'>this is danger text</Text>
            {/* danger is look like  red  in color */}
            <br />
            <Text disabled>this is disabled text</Text>
            <br />

            {/* this is the link tag in the ant design  */}
            <Link href='https://www.linkedin.com' target='_blank'>
                Linkedin
            </Link>

            <Paragraph copyable>
             this is the copyable paragraph
            </Paragraph>
        </div>
    )
}

export default TypographyComp
