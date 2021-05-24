import React from 'react';

class ResetCode extends React.Component {
    constructor(props) {
        super(props);

        this.clearCode = this.clearCode.bind(this);
    }

    clearCode(event) {
        event.preventDefault();
        this.props.clearContent();
    }

    render() {
        return (
            <button class="negative ui button" onClick={this.clearCode}>Reset Code</button>
        );
    }
}

export default ResetCode;