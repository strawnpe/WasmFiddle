import { Code } from "react-feather"; // https://github.com/feathericons/react-feather

const Header = () => {
    return (
        <div className="ui fluid card">
            <h1 className="ui blue header">
                <Code color="black" size={38} />
                <div className="content">
                    WASMFiddle
                </div>
            </h1>
        </div>
    );
};

export default Header;