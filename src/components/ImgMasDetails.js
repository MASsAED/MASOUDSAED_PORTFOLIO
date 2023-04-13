import React from 'react'

export const ImgMasDetails = (props) => {
  return (
      <div>
          src{props.src}
          alt{props.alt}
          ref{(img) => (this.imgRef = img)}
          {props.Children}
    </div>
  )
}

