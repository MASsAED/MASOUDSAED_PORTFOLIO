import React, { useEffect } from 'react';
import $ from 'jquery';
import './component.css';

export function ColorChangingElement() {
    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            $('#my-element').css('color', randomColor);
        }, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return <div id="my-element">
        <h1 className="greeting-homepage">Hi There,</h1>
        <h1 className="greeting-homepage">I'm Masoud Saed</h1>
        <h4 className="greeting-homepage">I Am into Web Development!</h4>
    </div>;
}
 