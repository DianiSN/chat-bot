import React, { useState } from 'react'
import Bubble from './Bubble'


const Chat = (props) => {

    const { name, messages, fetching } = props
    const type = "bot"

    return (
        // <h1>{botResponse}</h1>
        // <button onClick={(e) => getResponse(e)}>Say Hello!</button>
        <section className="chat-bubbles">
            {
                messages.map((message, index) => {
                    return <Bubble key={index} type={message.sender} msg={message.msg}/>
                })
            }
            {
                fetching && <Bubble type="bot" msg=". . ."></Bubble>
            }
        </section>
    )

}

export default Chat
