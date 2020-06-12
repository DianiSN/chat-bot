import React, { useState, useEffect } from 'react'
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
    const [fetchingResp, setFetchingResp] = useState(false)


    const fetchResponse = async (userMsg) => {
        // return await fetch('/response')
        // .then(response => response.text())
        // .then(data => data)
        const response = await fetch('/response', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userMsg) // body data type must match "Content-Type" header
        })

        return response.text()
    }

    const onSendMessage = (e) => {
        e.preventDefault()
        const input = document.getElementById('user_msg')
        const newMsg = {
            msg: input.value,
            sender: 'user',
            time: new Date()
        }
        input.value = ''
        setMessages([...messages, newMsg])
        setFetchingResp(true)
        fetchResponse(newMsg).then((result) => {
            setFetchingResp(false)
            setMessages([...messages, newMsg, {
                msg: result,
                sender: 'bot',
                time: new Date()
            }])
        }).catch((error) => {
            console.log(error);
        })
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
                <Chat name="Diana" messages={messages} fetching={fetchingResp}/>
            </main>
            <footer className="send-msg">
                <SendMessage onSendMessage={onSendMessage}></SendMessage>
            </footer>
        </div>
    )
}

export default App
