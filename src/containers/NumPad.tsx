import React from 'react'
//import PropTypes from 'prop-types'
import { connect, ConnectedProps } from 'react-redux'
import { State } from '../redux'
import { keyPressNum } from '../redux/actions'
import { Row, Col, Container } from 'react-bootstrap'
import { KeyCap } from '../components/KeyCap'
//import { AppState } from '../redux'

interface Props extends PropsFromRedux {

}

export const NumPad: React.FC<Props> = (props: Props) => {

/*
  const operand1: string = useSelector((state: AppState) => state.keys.operand1)
  const operand2: string = useSelector((state: AppState) => state.keys.operand2)
 */

  return (
    <Col className="NumPadCol" line-height={1.5} xs={3.5}>
    <Container fluid>
      <Row>
        <div className="NumKeySpace">
          <KeyCap id={"7"} type={"button"} name={"7"} caption={"7"} action={() => keyPressNum('7')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"8"} type={"button"} name={"8"} caption={"8"} action={() => keyPressNum('8')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"9"} type={"button"} name={"9"} caption={"9"} action={() => keyPressNum('9')}/>
        </div>
      </Row>
      <Row>
        <div className="NumKeySpace">
          <KeyCap id={"4"} type={"button"} name={"4"} caption={"4"} action={() => keyPressNum('4')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"5"} type={"button"} name={"5"} caption={"5"} action={() => keyPressNum('5')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"6"} type={"button"} name={"6"} caption={"6"} action={() => keyPressNum('6')}/>
        </div>
      </Row>
      <Row>
        <div className="NumKeySpace">
          <KeyCap id={"1"} type={"button"} name={"1"} caption={"1"} action={() => keyPressNum('1')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"2"} type={"button"} name={"2"} caption={"2"} action={() => keyPressNum('2')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"3"} type={"button"} name={"3"} caption={"3"} action={() => keyPressNum('3')}/>
        </div>
      </Row>
      <Row>
        <div className="NumKeySpace">
          <KeyCap id={"-"} type={"button"} name={"+-"} caption={"+/-"} action={() => keyPressNum('-')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"0"} type={"button"} name={"0"} caption={"0"} action={() => keyPressNum('0')}/>
        </div>
        <div className="NumKeySpace">
          <KeyCap id={"."} type={"button"} name={"."} caption={"."} action={() => keyPressNum('.')}/>
        </div>
      </Row>
    </Container>
  </Col>
  )
}

/* NumPad.propTypes = {
  props: PropTypes
} */

const mapStateToProps = (state: State) => ({

})

const mapDispatchToProps = {

}


const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(NumPad)