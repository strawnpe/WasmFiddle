import React from 'react';
import LanguageSelection from "./LanguageSelection";
import FileUpload from "./FileUpload";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/rust/rust');
require('codemirror/mode/clike/clike')

const CodeInput = () => {
    return (
        <div className="ui card">
            <div className="content">
                <h2 className="ui teal header">Code Input</h2>
                <LanguageSelection />
                <FileUpload />
            </div>
            <CodeMirror
                options={{
                    mode: 'clike',
                    theme: 'material',
                    lineNumbers: true,
                    value: 'hello'
                }}
                onChange={(editor, data, value) => {
                }}
            />
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic yellow button">Reset Code</div>
                    <div className="ui basic olive button">Run</div>
                </div>
            </div>
        </div>
    );
};

export default CodeInput;