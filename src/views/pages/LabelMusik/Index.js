import React, { Component } from 'react'
import {Tabs, Card} from "antd"
import Approval from "./Approval"
import UserApproved from "./UserApproved"
const {TabPane} = Tabs


export class Index extends Component {
    render() {
        return (
            <Card title="Label Musik">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Approval Label Musik" key="1">
              <Approval/>
            </TabPane>
            <TabPane tab="List Label Musik" key="2">
            <UserApproved/>
            </TabPane>
          </Tabs>
          </Card>
        )
    }
}

export default Index
