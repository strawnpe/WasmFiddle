import React from "react";

const CodeOutput = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="ui fluid card">
            <div className="content">
                <h2 className="ui teal header">Code Output</h2>
                <p>{!data ? "Loading..." : data}</p>
            </div>
        </div>
    );
};

export default CodeOutput;