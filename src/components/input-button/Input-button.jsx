import React, {useState, useCallback} from 'react';
import { Button, Input } from 'gismart-ui/core/components';

import './input-button.css'

const InputButton = ({onClick, direction, initialValue}) => {
    const [text, setText] = useState(initialValue);
    const onClickCallback = useCallback(() => onClick(text), [onClick, text])
    return (
        <div id="box" className={direction}>
            <Input onChange={setText} value={text}/>
            <Button onClick={onClickCallback}>Click</Button>
        </div>
    )
}

export default InputButton;