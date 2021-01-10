import React, { Component } from 'react'
export default class UploadData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: "",
            files: [],
            countLoad : 0
        }

    }
    handleChange = (e) => {
        this.setState({
            countLoad : this.state.countLoad + 1
        }, () => {
            const data = e.target.files
            this.props.sendData(data)
            this.props.onReload(this.state.countLoad)
        })
       
    
    }

    onDrop = (files) => {
        let file = []
        files.forEach(e => {
            file.push(e)
        })
        this.setState({ files : file }, () => {
            console.log("jingan", this.state.files)
        })
    };
    render() {

        return (
            <div className="box" >
                <input type="file" multiple onChange={this.handleChange}>
                </input>
            </div>
        )
    }
}
