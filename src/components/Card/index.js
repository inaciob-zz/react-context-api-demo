import React from 'react'
import './card.css'

export default function Card({ title }) {
    return (
        <div className='card'>
            <div className='card--title'>
                <p>{ title }</p>
            </div>
            <div className='card--content-container grid grid-1-2'>
                <div className='card--content-image' style={{ backgroundImage: 'url(https://placeimg.com/640/480/any)' }}></div>
                <div className='card--content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}
