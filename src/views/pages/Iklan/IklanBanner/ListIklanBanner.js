import { Table, Image, Switch} from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { Component, Fragment } from 'react'
import {
    EditTwoTone,
    DeleteTwoTone,
    EyeTwoTone
} from '@ant-design/icons';

export default class ListIklanBanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openModalData: false,
            openModalEdit: false,
            detailData: {},
            fileImg: null,
            active: false,
            size: 'default',
            buttonShape: 'default',
            index : null,
            data : [
                {
                    "id" : 1,
                    "title": "Lady with",
                    "description": "Lady with a red umbrella",
                    "imageUrl": "https://blog.hubspot.com/hubfs/google-image-pack.png",
                    "isActive": false,
                },
                {
                    "id" : 2,
                    "title": "Lady with 1",
                    "description": "Flowers and some fruits",
                    "imageUrl": "https://i.imgur.com/KIPtISY.jpg",
                    "isActive": true,
                },
            ]
        }
    }
    handleActiveChange = checked => {
        console.log(checked)
        // console.log(x.id)
        // const {data} =this.state

        // const findIndex = data.find(e => e.id === x.id)
       
        // // console.log(findIndex.length)
        // if(typeof findIndex === "object"){
        //     findIndex.isActive = true
        //     console.log(this.state.data)
        //     // this.setState({data : findIndex}, ()=> {
        //     //     console.log(this.state.data, "nyampe")
                
        //     // })
        // }
     
      
    
      };
    
    actionData = (data) => {
        return (
            <div>
                <EyeTwoTone onClick={() => { this.openModalData(data, "read") }} style={{ marginRight: 5, fontSize: 18 }} />
                <EditTwoTone onClick={() => { this.openModalData(data, "edit") }} style={{ marginRight: 5, fontSize: 18 }} />
                <DeleteTwoTone onClick={() => { this.openModalData(data) }} style={{ marginRight: 5, fontSize: 18 }} />
            </div>
        )
    }
    actionActive = (data) => {
        const { active , size, buttonShape} = this.state
        return (
            <div>
            <Switch checked={data.isActive} onChange={() => {this.handleActiveChange(data.isActive)}} />
            </div>
        )

    }
    openModalData = (e, type) => {
        console.log(e)
        this.setState({
            detailData: e,
            fileImg: e.imageUrl
        }, () => {
            console.log(this.state.fileImg, this.state.detailData)
        })
        if (type === "read") {
            this.setState({ openModalData: true, openModalEdit: false })
        } else {
            this.setState({ openModalData: false, openModalEdit: true })
        }
    }

    handleCancel = () => {
        this.setState({
            openModalData: false,
            openModalEdit: false
        })
    }
    render() {
        const { openModalData, detailData, fileImg, openModalEdit,data } = this.state
        console.log(openModalEdit)
   
        const columns = [
            {
                title: 'No',
                key: 'index',
                // render: (index) => return (index + 1) 
            },
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'desc',
            },
            {
                title: 'Actions',
                key: 'x',
                render: (record) => this.actionData(record)
            },
            {
                title: 'Active Ads',
                key: 'x',
                render: (record) => this.actionActive(record)
            },
        ]

        return (
            <Fragment>
                <Modal visible={openModalData}
                    style={{ marginTop: "100px" }}
                    onCancel={this.handleCancel}
                >

                    <Image
                        width={"100%"}
                        src={fileImg}
                    />
                </Modal>
                <Modal visible={this.state.openModalEdit}

                    style={{ marginTop: "100px" }}
                    onCancel={this.handleCancel}>
                    <p>{detailData.title}</p>
                </Modal>
                <Table dataSource={data} columns={columns} />
            </Fragment>

        )
    }
}
