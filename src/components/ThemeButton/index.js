import React from 'react'
import './themeButton.css'

export default function ThemeButton({ onClick, className }) {
    return (
        <button type='button'
            onClick={ (e) => {
                if(onClick) { onClick(e) }
            }}
            className={ className }
        >
            Toggle Theme
        </button>
    )
}
