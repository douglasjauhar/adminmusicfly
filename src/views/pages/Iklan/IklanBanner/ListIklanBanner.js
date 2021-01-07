import { Table, Image, Switch, Input, Popconfirm, message } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { Component, Fragment } from 'react'
import {
    EditTwoTone,
    DeleteTwoTone,
    EyeTwoTone
} from '@ant-design/icons';

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

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
            index: null,
            data: [
                {
                    "id": 1,
                    "title": "Lady with",
                    "description": "Lady with a red umbrella",
                    "imageUrl": "https://i.pinimg.com/736x/a6/ac/4c/a6ac4c4b2d2f5d58ed13a6dc1fb27171.jpg",
                    "isActive": false,
                },
                {
                    "id": 2,
                    "title": "Lady with 1",
                    "description": "Flowers and some fruits",
                    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLcLnPYW-1Wz3NKp7qk7lmsVr6_LWBvXtnQ&usqp=CAU",
                    "isActive": true,
                },
            ]
        }
    }
    handleActiveChange = checked => {
        console.log(checked)
    };

    actionData = (data) => {
        return (
            <div>
                <EyeTwoTone onClick={() => { this.openModalData(data, "read") }} style={{ marginRight: 5, fontSize: 18 }} />
                <EditTwoTone onClick={() => { this.openModalData(data, "edit") }} style={{ marginRight: 5, fontSize: 18 }} />
                <Popconfirm
                    title={`Apakah anda yakin menghapus ads ${data.title} ?`}
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <DeleteTwoTone  style={{ marginRight: 5, fontSize: 18, color: "red" }} />
                </Popconfirm>
            </div>
        )
    }
    actionActive = (data) => {
        return (
            <div>
                <Switch checked={data.isActive} onChange={() => { this.handleActiveChange(data.isActive) }} />
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
        const { openModalData, detailData, fileImg, openModalEdit, data } = this.state
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

        // const file = `<p>EDO MAU MAKAN NASI</p><ol><li>makan</li></ol><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/oSUmsNXA6KE?showinfo=0"></iframe><ol><li><br></li><li>ngising</li><li>nyabun</li><li>konten</li></ol> `
        

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
                    title="Edit Ads"

                    style={{ marginTop: "100px" }}
                    onCancel={this.handleCancel}>
                    <Input value={detailData.title} style={{ marginBottom: 10 }} />
                    <Input value={detailData.description} style={{ marginBottom: 10 }} />
                    {/* <Input type="file" value={fileImg}/> */}
                    <Image src={fileImg} width={"200px"} />
                </Modal>
                {/* <div dangerouslySetInnerHTML={{__html:file}}></div> */}
                <Table dataSource={data} columns={columns} />
            </Fragment>

        )
    }
}
