import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Chat from './Chat'
import SendMessage from './SendMessage'
import Moment from 'react-moment'
import '../../scss/App.scss'


const App = () => {
    const [messages, setMessages] = useState([{
        msg: 'Hello! How may I help?',
        sender: 'bot',
        time: new Date()
    },{
        msg: 'What are the company holidays?',
        sender: 'user',
        time: new Date()
    }])

    const onSendMessage = (e) => {
        e.preventDefault()
        const input = document.getElementById('user_msg')
        const newMsg = {
            msg: input.value,
            sender: 'user',
            time: new Date()
        }
        setMessages([...messages, newMsg])
        input.value = ''
    }

    return (
        <div className="container">
            <header className="header">
                <h1>How may I help?</h1>
                <h5>
                    <Moment date={new Date()} format="LL" />
                </h5>
            </header>
            <main className="chat-content">
                <Chat name="Diana" messages={messages}/>
            </main>
            <footer className="send-msg">
                <SendMessage onSendMessage={onSendMessage}></SendMessage>
            </footer>
        </div>
    )
}

export default App
