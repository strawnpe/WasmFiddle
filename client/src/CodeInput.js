import React from 'react';
import LanguageSelection from "./LanguageSelection";
import FileUpload from "./FileUpload";
import ResetCode from "./ResetCode";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/rust/rust');
require('codemirror/mode/clike/clike')

class CodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'clike',
            currentCode: '// Begin coding here!'
        };

        this.changeCodeContent = this.changeCodeContent.bind(this);
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    toggleLanguage(newLang) {
        console.log("Toggling language...")
        this.setState({lang: newLang});
    }

    changeCodeContent(newCode) {
        this.setState({currentCode: newCode});
    }

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <h2 className="ui teal header">Code Input</h2>
                    <LanguageSelection changeLang={this.toggleLanguage}/>
                    <FileUpload setContent={this.changeCodeContent}/>
                </div>
                <CodeMirror
                    value={this.state.currentCode}
                    options={{
                        mode: this.state.lang,
                        theme: 'material',
                        lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => {
                        this.changeCodeContent(value);
                    }}
                />
                <div className="extra content">
                    <div className="ui two buttons">
                        <ResetCode clearContent={this.changeCodeContent}/>
                        <div className="ui basic olive button">Run</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CodeInput;