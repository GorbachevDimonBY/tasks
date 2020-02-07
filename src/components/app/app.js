import React from 'react';
import InputButton from '../input-button';
import Result from '../result';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultValue: '',
            visible: true
        }
    } 

    changeResultValue = (text) => {
        this.setState({
            resultValue: text,
            visible: true
        });
    }

    changeVisible = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        const { resultValue } = this.state;
        return (
            <div>
                <InputButton onClick={this.changeResultValue} 
                             resultValue={this.state.resultValue}
                             clazz='column'
                />
                <Result visible={this.state.visible} 
                        resultValue={resultValue} 
                        onClick={this.changeResultValue} 
                        falseVisible={this.changeVisible}
                />
            </div>
        )
    }
}