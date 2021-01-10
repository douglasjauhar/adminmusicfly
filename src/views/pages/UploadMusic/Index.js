import React, { Component, Fragment } from 'react'
import { Card } from 'antd'
import FormUpload from './FormUpload'
import UploadData from './UploadData'
import { Tabs } from 'antd';
import YourTracks from './YourTracks';
import country from './data.json'

const { TabPane } = Tabs;
export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            load: 0
        }
    }

    sendData = (v) => {
        this.setState({ data: [...v] }, () => {
        })
    }

    onReload = (c) => {
        console.log("so", c)
        this.setState({
            load: c
        })
    }

    render() {
        const { data, load } = this.state
        return (
            <Fragment>
                <Card title="Upload Music">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Upload" key="1">
                            <UploadData sendData={(v) => this.sendData(v)}
                                onReload={(e) => this.onReload(e)}
                            />
                            <div>
                                {data !== null ?
                                    <FormUpload
                                        sendData={(v) => this.sendData(v)}
                                        receivedata={this.state.data}
                                        loadPage={load}
                                    />
                                    : null}
                            </div>
                        </TabPane>
                        <TabPane tab="Your Track" key="2">
                            <YourTracks />
                        </TabPane>
                    </Tabs>

                </Card>
            </Fragment>
        )
    }
}
