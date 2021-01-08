import React, { Component } from 'react'
export default class UploadData extends Component {
    constructor(props){
       super(props)
        this.state = {
            file : ""
        }
    }
    handleChange = (e) => {
        const data = e.target.files
        this.props.sendData(data)
    }
    render() {
        return (
          <div className="box" >
              <input type="file" multiple onChange={this.handleChange}></input>
          </div>
        )
    }
}
