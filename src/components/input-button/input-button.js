import React, {useState} from 'react';
import Input from '../input';
import Button from '../button';

import './input-button.css'


const InputButton = ({onClick, clazz, resultValue}) => {
    const [text, setText] = useState(resultValue);
    return (
        <div id="box" className={clazz}>
            <Input onChange={setText} value={text}/>
            <Button value={text} onClick={onClick}/>
        </div>
    )
}

export default InputButton;