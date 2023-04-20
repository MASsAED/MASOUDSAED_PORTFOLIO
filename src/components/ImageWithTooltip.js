import React, { Component } from 'react';
import $ from 'jquery';

export class ImageWithTooltip extends Component {
    componentDidMount() {
        $(this.imgRef).tooltip();
    }

    render() {
        return (
            <ImgMasDetails>
                <img src="./images/MASOUDSAED-2.jpg"
                    alt="masoud saed" />
            </ImgMasDetails>
        );
    }
}
