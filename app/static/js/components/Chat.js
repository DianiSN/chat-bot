import React, { useState } from 'react'
import Bubble from './Bubble'


const Chat = (props) => {

    const { name } = props
    const [botResponse, setBotResponse] = useState(`Hello ${name}`)

    const getResponse = (e) => {
        e.preventDefault()
        fetch('/response')
        .then(response => response.text())
        .then(data => {
        	 	setBotResponse(`${data} ${name}`)
        })
    }
    const type = "bot";

    return (
        // <h1>{botResponse}</h1>
        // <button onClick={(e) => getResponse(e)}>Say Hello!</button>
        <section className="chat-bubbles">
            <Bubble type="bot"/>
            <Bubble type="user"/>
        </section>
    )

}

export default Chat
