import React from 'react'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div class="popup-inner">
                <h5>Hi There!</h5>
                <p className="popup-p">
                    "Welcome to my portfolio website! I'm excited to share my skills and achievements with you. Take a look around and explore my portfolio to see some of my best work. And if you have any questions or would like to learn more about my skills and experience, please don't hesitate to get in touch.Thanks for stopping by!"
                </p>
                <button className="button" onClick={() => props.setTrigger(false)} >Close Message</button>
                {props.Children}
            </div>
        </div>
    ) : "";
}

export default Popup