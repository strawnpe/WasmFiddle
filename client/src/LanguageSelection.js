import React from "react";

class LanguageSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "c"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value); 
        this.setState({ language: event.target.value }, () => console.log(this.state.language));
        if (event.target.value !== 'rust') {
            this.props.changeLang("clike");
        } else {
            this.props.changeLang("rust");
        }
    }

    render () {
        return (
            <div className="ui container">
                <div className="content">
                    <h3 className="ui green header">Language Selection</h3>
                </div>
                <div className="content">
                    <select className="ui fluid dropdown" label="Select Language" onChange={this.handleChange}>
                        <option value="c">C</option>
                        <option value="c++">C++</option>
                        <option value="rust">Rust</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default LanguageSelection;
