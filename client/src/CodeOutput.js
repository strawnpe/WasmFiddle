import React from "react";

class CodeOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filename: props.filename || null, data: props.data || null };
        this.changeOutput = this.changeOutput.bind(this);
    };

    componentDidUpdate = async (prevProps) => {
        if (prevProps.filename !== this.props.filename) {
          await this.changeOutput(this.props.filename);
        }
      }

    changeOutput = async (filename) => {
        let shortName = filename;
        if (filename.endsWith('.c') || filename.endsWith('.cpp') || filename.endsWith('.rs')) {
            const idx = filename.lastIndexOf('.');
            shortName = shortName.substring(0, idx);
        }
        this.setState({ filename: shortName }); 
    }
    render() {
        let wasm_url;
        if (this.state.filename) {
            wasm_url = `http://localhost:3001/files/${this.state.filename}.html`
        }
        console.log(wasm_url);
        return (
            <div className="ui fluid card">
                <div className="content">
                    <h2 className="ui teal header">Code Output</h2>
                    {wasm_url ? <iframe src={wasm_url} title="Output Result" width="500px"></iframe> : <p>Loading...</p>}
                </div>
            </div>
        );
    }
};

export default CodeOutput;