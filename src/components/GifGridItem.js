import React from 'react'

const GifGridItem = ({ img, delay = 0 }) => {
  return (
    <div className={`card animate__animated animate__bounceIn animate__delay-${delay}s`}>
        <img src={img.url} alt={img.title} />
        <label>{img.title}</label>
    </div>
  )
}

export default GifGridItem