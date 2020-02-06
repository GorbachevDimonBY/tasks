import React from 'react';
import InputUp from '../input-up/input-up';
import Button from '../button/button';
import Result from '../result/result';
import InputDown from '../input-down/input-down';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUpValue: '',
            inputDownValue: '',
            visible: '',
            visibleDown: false,
            visibleResult: true
        }
    }

    changeValue = (text) => {
        this.setState({
            inputUpValue: text
        });
    }

    changeValueDown = (text) => {
        this.setState({
            inputDownValue: text
        });
    }

    visibleInput = () => {
        this.setState({
            visible: this.state.inputUpValue,
            visibleResult: true,
            visibleDown: false
        });
    }

    visibleDownInput = () => {
        this.setState({
            visibleDown: true,
            visibleResult: false,
            inputDownValue: this.state.visible
        });
    }

    visibleDownResult = () => {
        this.setState({
            visibleDown: false,
            visibleResult: true,
            visible: this.state.inputDownValue
        });
    }

    render() {
        return (
            <div>
                <InputUp onChange={this.changeValue} /> 
                <Button onClick={this.visibleInput} />
                {this.state.visibleResult ? <Result visibleValue={this.state.visible} onClick={this.visibleDownInput}/> : null}
                {this.state.visibleDown ? <InputDown onChange={this.changeValueDown} onClick={this.visibleDownResult} visibleValue={this.state.visible}/> : null}
            </div>
        )
    }
}