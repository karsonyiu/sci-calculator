import React from "react";
import { keyPressOpr } from "../../redux/actions";
import { Row, Col, Container } from "react-bootstrap";
import { KeyCap } from "../../components/KeyCap";
import { RootState, AppDispatch } from "../../redux";
import { useDispatch } from "react-redux";

const mapState = (state: RootState) => ({});
const mapDispatch = {};

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

type Props = StateProps & DispatchProps;

const OprPad: React.FC<Props> = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const onClickHandle = (keyIn: string) => dispatch(keyPressOpr(keyIn));

  return (
    <Container fluid="md">
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"/"}
            type={"Button"}
            name={"/"}
            caption={"/"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"AC"}
            type={"Button"}
            name={"AC"}
            caption={"AC"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"*"}
            type={"Button"}
            name={"*"}
            caption={"x"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"DEL"}
            type={"Button"}
            name={"DEL"}
            caption={"C"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"-"}
            type={"Button"}
            name={"-"}
            caption={"-"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"M"}
            type={"Button"}
            name={"M"}
            caption={"M"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"+"}
            type={"Button"}
            name={"+"}
            caption={"+"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"="}
            type={"Button"}
            name={"="}
            caption={"="}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OprPad;
