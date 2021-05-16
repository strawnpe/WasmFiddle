import React from 'react';
import LanguageSelection from "./LanguageSelection";
import FileUpload from "./FileUpload";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/rust/rust');
require('codemirror/mode/clike/clike')

class CodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lang: 'clike'};

        this.toggleLanguage = this.toggleLanguage.bind(this);
    }

    toggleLanguage(newLang) {
        console.log("Toggling language...")
        this.setState({lang: newLang});
    }

    sendData() {
        try {
            const data = fetch('THE_ADDRESS', {
                method: 'POST',
                headers: {},
                body: JSON.stringify({
                    language: this.state.language,
                    text: this.state.text
                })
            });
            console.log(data);
            this.setState({compiledCode: data});
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <h2 className="ui teal header">Code Input</h2>
                    <LanguageSelection changeLang={this.toggleLanguage}/>
                    <FileUpload />
                </div>
                <CodeMirror
                    options={{
                        mode: this.state.lang,
                        theme: 'material',
                        lineNumbers: true,
                        value: 'hello'
                    }}
                    onChange={(editor, data, value) => {
                        this.state.text = value;
                    }}
                />
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic yellow button">Reset Code</div>
                        <div className="ui basic olive button" onClick={this.sendData}>Run</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default CodeInput;