import React from 'react'
import BotAvatar from './BotAvatar'
import UserAvatar from './UserAvatar'
import Moment from 'react-moment'


const Bubble = (props) => {
    const { msg, sender, time } = props.msg

    return (
        <div>
            <div className={'chat-bubble chat-bubble-'+sender}>
                {
                    (sender === "bot") ? <BotAvatar/> : <UserAvatar/>
                }
                <div className="msg">
                    {msg}
                </div>
            </div>
            <div className="time">
                <div className={'time-'+sender}>
                    <Moment date={time} format="h:mm a" />
                </div>
            </div>
        </div>

    )
}

export default Bubble
