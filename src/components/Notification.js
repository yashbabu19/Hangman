import React from 'react'

const Notification = ({ showNotification }) => {
    return ( 
    <div>
            <div className = {`notification-container${showNotification? 'show': ' ' }`}>
        <p> You have already entered this letter </p> 
        </div >

        </div>
)
}

export default Notification;