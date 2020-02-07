import React from 'react';

const Input = ({onChange, value}) => {
    const onLabelChange = (e) => {
        onChange(e);
    }
    return <input onChange={(e) => onLabelChange(e.target.value)} value={value}/>
}

export default Input;