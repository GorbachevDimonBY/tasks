import React from 'react';

export default class Result extends React.Component {
    render() {
        const {visibleValue, onClick} = this.props;
        return (
            <div className="checkValue" onClick={onClick}>
                <div>{visibleValue}</div>
            </div>
        )
    }
}

