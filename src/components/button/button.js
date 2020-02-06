import React from 'react';

const Button = ({onClick}) => {
    
    return (
        <div>
            <button type="button"
                    onClick={onClick}>
            Click
            </button>
        </div>
    )
}

export default Button;