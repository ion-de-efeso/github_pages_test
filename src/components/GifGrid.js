import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category)

  return (
    <div className='card-grid'>
        <h3>{ category }</h3>
        { loading && <p className='animate__animated animate__shakeY'>Loading...</p> }
        <ul>
            {
                images.map((img, i) => (
                    <li key={img.id}>
                        <GifGridItem img={img} delay={i} />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default GifGrid