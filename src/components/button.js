import React from 'react'

const Button = ({children,onClick: handleClick, ...otherProps}) => (
    <button className="primary-button" onClick={handleClick} {...otherProps}>
        {
            children
        }
    </button>
)

export {Button}