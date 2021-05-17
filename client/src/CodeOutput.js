import React from "react";

class CodeOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
        //const [data, setData] = React.useState(compiledCode);
        const data = null;
        console.log(data);

        this.compiledCode = this.compiledCode.bind(this);
    };

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
            <div className="ui card">
                <div className="content">
                    <h2 className="ui teal header">Code Output</h2>
                    <p>{!this.data ? "Loading..." : this.data}</p>
                </div>
            </div>
        );
    }
};

export default CodeOutput;