import React, { useRef } from 'react';
import $ from 'jquery';


export const ImageWithTooltip = () => {
    const imageRef = useRef(null);

    const handleMouseOver = (event) => {
        const tooltip = $('<div>')
            .addClass('.tooltip')
            .text('.tooltipText')
            .appendTo('.tooltip');

        const x = event.pageX + 10;
        const y = event.pageY + 10;

        tooltip.css({
            top: y,
            left: x,
        });
    };

    const handleMouseOut = () => {
        $('.tooltip').remove();
    };

    return (
        <>
            <div>
        <img
            ref={imageRef}
            src='./images/MASOUDSAED-2.jpg'
            alt="Image"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="img-masoud"
        />
        <div>
                <ul className="tooltip">
                    <li className="tooltipText" >MASOUD SAED</li>
                    <li className="tooltipText" >AGE 33</li>
                    <li className="tooltipText" >BACHLOR COMPUTER SOFTWARE</li>
                    <li className="tooltipText" >I LOVE TO CODEING</li>
                </ul> 
                </div>
            </div>
        </>
    );
}

