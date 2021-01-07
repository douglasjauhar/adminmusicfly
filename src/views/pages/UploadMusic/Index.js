import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import FormUpload from './FormUpload'
import UploadData from './UploadData'


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    sendData = (v) => {
        this.setState({ data: v })
    }
    render() {
        const { data } = this.state
        return (
            <Fragment>
                <Card>
                    {data === null ?
                        <UploadData sendData={(v) => this.sendData(v)} />
                        :
                        <FormUpload receivedata={this.state.data}/>
                    }
                </Card>
            </Fragment>
        )
    }
}
