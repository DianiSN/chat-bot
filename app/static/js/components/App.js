import React from 'react'
import { Container } from 'react-bootstrap'
import Chat from './Chat'
import SendMessage from './SendMessage'
import Moment from 'react-moment'
import '../../scss/App.scss'


const App = () => {

    return (
        <div className="container">
            <header className="header">
                <h1>How may I help?</h1>
                <h5>
                    <Moment date={new Date()} format="LL" />
                </h5>
            </header>
            <main className="chat-content">
                <Chat name="Diana"/>
            </main>
            <footer className="send-msg">
                <SendMessage></SendMessage>
            </footer>
        </div>
    )
}

export default App
