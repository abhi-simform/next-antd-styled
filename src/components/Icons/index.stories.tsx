import { Col, Row } from 'antd'
import * as Icons from '.'
import { StyledDiv } from './icons.style'

export default {
  title: 'Custom/SVG Icons',
  tags: ['autodocs']
}

export function Default() {
  return (
    <Row gutter={[16, 16]}>
      {Object.entries(Icons).map((item) => {
        const [iconName, Icon] = item
        return (
          <Col span={4} key={iconName}>
            <StyledDiv>
              <Icon />
              <p>{iconName}</p>
            </StyledDiv>
          </Col>
        )
      })}
    </Row>
  )
}
