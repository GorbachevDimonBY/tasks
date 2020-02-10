import React from 'react';
import InputButton from '../input-button';

const Result = ({initialValue, onClick, showText, changeVisibility}) => {
    return (
        <div>
            {showText ? 
            <div onClick={changeVisibility}>{initialValue}</div> : 
            <InputButton onClick={onClick} initialValue={initialValue}/>}
        </div>
    )
}

export default Result;