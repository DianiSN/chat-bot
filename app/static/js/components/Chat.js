import React, { useState, useEffect } from 'react'
import Bubble from './Bubble'

const Chat = (props) => {

    const { name, messages, fetching } = props
    const type = "bot"

    console.log(props);


    return (
        <section id="chat_section" className="chat-bubbles">
            {
                messages.map((message, index) => {
                    return <Bubble key={index} msg={message}/>
                })
            }
            {
                fetching && <Bubble msg={{
                    msg: '. . . ',
                    sender:"bot",
                    time: new Date()
                }}></Bubble>
            }
        </section>
    )

}

export default Chat
