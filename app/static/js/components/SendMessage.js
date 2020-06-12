import React from 'react'
import { Form, Button} from 'react-bootstrap'

const SendMessage = (props) => {
    const { onSendMessage } = props

    return (
        <div className="msg-input">
            <Form.Control id="user_msg" className="input-field"  type="text" size="lg"/>
            <Button className="send-btn" onClick={(e) => onSendMessage(e) }>
                <i className="material-icons">send</i>
            </Button>
        </div>
    )
}

export default SendMessage
