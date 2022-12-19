import React from 'react'
import { useEffect, useState } from 'react'
import './backToTopButton.css'

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false)
            }
    )}, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <div>
            {backToTopButton && (
               <button className='backToTopButton' 
                    aria-label='scroll-up button'
                    onClick={scrollUp}>
                </button> 
            )}
                
        </div>
    )
}

export default BackToTopButton