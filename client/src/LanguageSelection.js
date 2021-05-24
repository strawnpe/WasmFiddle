import React from "react";

class LanguageSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "text/x-csrc"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value); 
        if (event.target.value === "0") {
            this.setState({
                language: "c" 
            }, () => {
                console.log(this.state.language);
            });
            this.props.changeLang("text/x-csrc");
        } else if (event.target.value === "1") {
            this.setState({
                language: "c++" 
            }, () => {
                console.log(this.state.language);
            });
            this.props.changeLang("text/x-c++src");
        } else if (event.target.value === "2") {
            this.setState({
                language: "rust" 
            }, () => {
                console.log(this.state.language);
            });
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
                    <select className="ui fluid dropdown" onChange={this.handleChange}>
                        <option value="">Language...</option>
                        <option value="0">C</option>
                        <option value="1">C++</option>
                        <option value="2">Rust</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default LanguageSelection;
