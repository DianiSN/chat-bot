import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'

const SendMessage = () => {
    return (
        <Row>
            <Col className="msg-input">
                <Form.Control type="text" size="lg" className="input-field"/>
                <Button>
                    <i className="material-icons">send</i>
                </Button>
            </Col>
        </Row>
    )
}

export default SendMessage
