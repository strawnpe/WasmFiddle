import React from 'react';
import LanguageSelection from "./LanguageSelection";
import FileUpload from "./FileUpload";
import CodeOutput from './CodeOutput';
import ResetCode from "./ResetCode";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';
require('codemirror/mode/rust/rust');
require('codemirror/mode/clike/clike');

class CodeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'text/x-csrc',
            currentCode: '// Begin coding here!',
            instance: null
        };

        this.changeCodeContent = this.changeCodeContent.bind(this);
        this.clearCodeContent = this.clearCodeContent.bind(this);
        this.toggleLanguage = this.toggleLanguage.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    toggleLanguage(newLang) {
        console.log("Toggling language...")
        this.setState({lang: newLang});
    }

    changeCodeContent(newCode) {
        this.setState({currentCode: newCode});
    }

    clearCodeContent() {
        this.state.instance.setValue('');
    }

    sendData = async () => {
        try {
            const result = await fetch('http://localhost:3001/send-file', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    language: this.state.language,
                    text: this.state.text
                })
            });
            console.log(result);
            this.setState({fetchCode: true, filename: result.data.fullName});
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
        <div class="ui two column grid">
            <div class="column">
                <div className="ui fluid card">
                    <div className="content">
                        <h2 className="ui teal header">Code Input</h2>
                        <LanguageSelection changeLang={this.toggleLanguage}/>
                        <br />
                        <FileUpload setContent={this.changeCodeContent}/>
                    </div>
                    <CodeMirror
                        value={this.state.currentCode}
                        editorDidMount={editor => { this.setState({
                            instance: editor
                        });}}
                        indentUnit={4}
                        options={{
                            mode: this.state.lang,
                            theme: 'eclipse',
                            lineNumbers: true,
                        }}
                        onChange={(editor, data, value) => {
                        }}
                    />
                    <div className="extra content">
                        <div className="ui two buttons">
                            <ResetCode clearContent={this.clearCodeContent}/>
                            <div className="ui basic olive button" onClick={this.sendData}>Run</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui two column grid">
                <CodeOutput changeOutput={this.sendData}></CodeOutput>
            </div>
        </div>
        );
    }
};

export default CodeInput;