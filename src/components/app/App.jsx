import React from 'react';
import InputButton from '../input-button';
import Result from '../result';
import 'gismart-ui/core/style.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: '',
            showText: true
        }
    } 

    changeResultValue = (text) => {
        this.setState({
            initialValue: text,
            showText: true
        });
    }

    changeVisibility = () => {
        this.setState({
            showText: false
        });
    }

    render() {
        const { initialValue, showText } = this.state;
        return (
            <div>
                <InputButton onClick={this.changeResultValue} 
                             initialValue={initialValue}
                             direction='column'
                />
                <Result showText={showText} 
                        initialValue={initialValue} 
                        onClick={this.changeResultValue} 
                        changeVisibility={this.changeVisibility}
                />
            </div>
        )
    }
}