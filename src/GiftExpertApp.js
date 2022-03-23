import React, { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from './components/GifGrid'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['The Beatles'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'FLCL'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>  
            <AddCategory setCategories={ setCategories } />    
            <hr />

            <ol>
                {
                    categories.map(c => {
                        return <li key={c}>
                            <GifGrid category={ c } />
                        </li>
                    })
                }
            </ol>
        </>
    )
}

export default GiftExpertApp