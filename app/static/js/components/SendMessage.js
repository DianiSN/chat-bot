import React from 'react'
import { Form, Button} from 'react-bootstrap'

const SendMessage = (props) => {
    const { onSendMessage } = props
    return (
        <div className="msg-input">
            <Form.Control id="user_msg" type="text" size="lg" className="input-field"/>
            <Button className="send-btn" onClick={(e) => onSendMessage(e) }>
                <i className="material-icons">send</i>
            </Button>
        </div>
    )
}

export default SendMessage
