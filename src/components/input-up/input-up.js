import React from 'react';

export default class InputUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            label: ''
        };   
    }
   
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <input 
                type="text" 
                onChange={ this.onLabelChange } 
                value={this.state.label} 
            />
        )
    }
}
