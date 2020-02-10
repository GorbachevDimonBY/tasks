import React, {useState} from 'react';
import Button from 'gismart-ui/core/components/Button';
import Input from 'gismart-ui/core/components/Input';

import './input-button.css'

const InputButton = ({onClick, direction, initialValue}) => {
    const [text, setText] = useState(initialValue);
    return (
        <div id="box" className={direction}>
            <Input onChange={setText} value={text}/>
            <Button onClick={() => onClick(text)}>Click</Button>
        </div>
    )
}

export default InputButton;