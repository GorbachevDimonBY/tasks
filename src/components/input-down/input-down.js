import React from 'react';

export default class InputDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: this.props.visibleValue
        };   
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
        this.props.onChange(e.target.value);
    }

    

    render() {
        const {onClick} = this.props
        return (
            <div>
                <input type="text" onChange={this.onLabelChange} value={this.state.label} />
                <button onClick={onClick}>V</button>
            </div>
        )
    } 
}
