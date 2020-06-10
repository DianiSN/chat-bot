import React, { useState } from 'react'

const Chat = (props) => {

    const { name } = props
    const [botResponse, setBotResponse] = useState(`Hello ${name}`)

    const getResponse = (e) => {
        e.preventDefault();
        fetch('/response')
        .then(response => response.text())
        .then(data => {
        	 	setBotResponse(`${data} ${name}`)
        })
    }

    return (
        <div>
            <h1>{botResponse}</h1>
            <button onClick={(e) => getResponse(e)}>Say Hello!</button>
        </div>
    )

}

export default Chat
