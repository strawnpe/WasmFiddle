import React from 'react';

class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileOpened: false
        };
        
        this.readIn = this.readIn.bind(this);
    }

    readIn(event) {
        console.log(event.target.files[0]);
        this.setState({ fileOpened: true });

        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result);
            this.props.setContent(reader.result);
        }
        reader.readAsText(event.target.files[0]);
    }

    render() {
        return (
            <div className="ui container">
                <div className="content">
                    <h3 className="ui green header">File Upload</h3>
                </div>
                <div className="content">
                    <input type="file" name="filename" onChange={this.readIn}/>
                </div>
            </div>
        );
    }
}
export default FileUpload;
