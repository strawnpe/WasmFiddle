import React from "react";
import {instantiateStreaming} from "assemblyscript/lib/loader";

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
                instantiateStreaming(
                    fetch(`https://wasmfiddle-314721.wl.r.appspot.com/${shortName}.wasm`)
                ).then(rawModule => Object.assign({}, rawModule, {
                    main: input => {
                        // Create the string in memory and get the pointer
                        const pInput = rawModule.__retain(rawModule.__allocString(input));
                
                        // Call the WebAssembly function
                        const pOutput = rawModule.scramble(pInput);
                
                        // Retrieve the result string
                        const result = rawModule.__getString(pOutput);
                
                        // Free up memory
                        rawModule.__release(pInput);
                        rawModule.__release(pOutput);
                        this.data = result;
                    }
                }));
                // const compiledWasm = fetch(`https://wasmfiddle-314721.wl.r.appspot.com/${shortName}.wasm`, {
                //     method: 'GET',
                //     headers: {},
                //     body: {}
                // });
                // console.log(compiledWasm);
                // this.setState({fetchCode: true});
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
                    <p>{this.data || "Loading..."}</p>
                </div>
            </div>
        );
    }
};

export default CodeOutput;