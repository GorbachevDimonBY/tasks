import React from 'react';
import InputButton from '../input-button';

const Result = ({resultValue, onClick, visible, falseVisible}) => {

    return (
        <div>
            {visible ? 
            <div onClick={ ()=> falseVisible() }>{resultValue}</div> : 
            <InputButton onClick={onClick} clazz='row' resultValue={resultValue}/>}
        </div>
    )
}

export default Result;