const LanguageSelection = () => {
    return (
        <div className="ui container">
            <div className="content">
                <h3 className="ui green header">Language Selection</h3>
            </div>
            <div className="content">
                <select className="ui fluid dropdown">
                    <option value="">Language</option>
                    <option value="2">C</option>
                    <option value="1">C++</option>
                    <option value="0">Rust</option>
                </select>
            </div>
        </div>
    );
};

export default LanguageSelection;