import React from 'react';
import LanguageSelection from "./LanguageSelection";
import FileUpload from "./FileUpload";

const CodeInput = () => {
    return (
        <div className="ui card">
            <div className="content">
                <h2 className="ui teal header">Code Input</h2>
                <LanguageSelection />
                <FileUpload />
            </div>
            <div className="content">
                <div className="ui input">
                    <input type="text" placeholder="Some code..." />
                </div>
            </div>
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