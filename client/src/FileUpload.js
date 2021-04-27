const FileUpload = () => {
    return (
        <div className="ui container">
            <div className="content">
                <h3 className="ui green header">File Upload</h3>
            </div>
            <div className="content">
                <input type="file" name="filename"/>
            </div>
        </div>
    );
};

export default FileUpload;