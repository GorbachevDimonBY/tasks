import React from 'react';

const Button = ({onClick, value}) => {
    return (
        <button onClick={() => onClick(value)}>Click</button>
    )
}

export default Button;