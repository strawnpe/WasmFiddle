import React from "react";

class CodeOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
        //const [data, setData] = React.useState(compiledCode);
        const data = null;
        console.log(data);

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        console.log(event.target.value);
        this.setState({fetchCode: event.target.value.fetchCode, filename: event.target.value.filename});
        let shortName = this.filename;
        if (this.filename.endsWith('.c') || this.filename.endsWith('.cpp') || this.filename.endsWith('.rs')) {
            const idx = this.filename.lastIndexOf('.');
            shortName = shortName.substring(0, idx);
        }
        if (this.fetchCode) {
            try {
                const compiledWasm = fetch(`http://34.223.1.201:3001/${shortName}.wasm`, {
                    method: 'POST',
                    headers: {},
                    body: {}
                });
                console.log(compiledWasm);
                this.setState({fetchCode: true});
            } catch (e) {
                console.log(e);
            } 
        }
    }

    compiledCode(data) {
        console.log(data);
    }

    // React.useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.message));
    // }, []);
    render() {
        return (
            <div className="ui fluid card">
                <div className="content">
                    <h2 className="ui teal header">Code Output</h2>
                    <p>{!this.data ? "Loading..." : this.data}</p>
                </div>
            </div>
        );
    }
};

export default CodeOutput;