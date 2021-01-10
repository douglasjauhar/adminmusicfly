import React, { Component } from 'react';
import { Table, Drawer, Button , Input} from "antd";
import FormUpload from './FormUpload';
import { ShareAltOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

export default class YourTracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openEdit: false,
            data: [],
            countLoad: 0,
            size: "small"
        }
    }
    toggleEdit = (d) => {
        this.setState({
            openEdit: true,
            countLoad: this.state.countLoad + 1,
            data: [d]
        }, () => {
            console.log("arr", this.state.data)
        })
    }
    actionData = (e) => {
        const { size } = this.state
        const styleBtn = {
            textAlign: "center",
            marginRight: 5
        }
        return (
            <div style={{ textAlign: "center" }}>
                <Button onClick={() => { this.toggleEdit(e) }} style={styleBtn} size={size} shape="circle">
                    <EditOutlined />
                </Button>
                <Button onClick={() => { this.toggleEdit(e) }} style={styleBtn} size={size} shape="circle">
                    <ShareAltOutlined />
                </Button>
                <Button onClick={() => { this.toggleEdit(e) }} size={size} shape="circle">
                    <DeleteOutlined />
                </Button>
            </div>

        )
    }
    handleCancel = () => {
        this.setState({
            openEdit: false
        })
    }
    render() {
        const { openEdit, data, countLoad } = this.state
        const datax = [
            {
                img: "https://cdn-2.tstatic.net/newsmaker/foto/bank/images/foto-jadul-peterpan.jpg",
                name: "Mimpi Yang Indah",
                duration: "3:21",
                uploaded: "2 day ago"
            },
            {
                img: "https://www.pkbisulsel.org/wp-content/uploads/2016/12/payung-teduh-cover-copy-copy-s-jpg_0847151.jpg",
                name: "Mimpi Yang Sempurna",
                duration: "5:21",
                uploaded: "1 day ago"
            },

        ]
        const columns = [
            {
                title: '',
                dataIndex: 'img',
                render: (img) => <img alt={`img`} src={`${img}`} width={60} height={60} />
            },
            {
                title: 'name',
                dataIndex: 'name',
            },
            {
                title: 'Edit',
                key: 'x',
                render: (record) => this.actionData(record)
            },
            {
                title: 'Duration',
                dataIndex: 'duration',
            },
            {
                title: 'Published',
                dataIndex: 'uploaded',
            },
        ];
        const wrapperForm = {
            margin: "100px auto"
        }
        const buttonStyle = {
            right: 0
        }

        return (
            <div className="your__tracks">
                <div className="" style={{ bottom: 0 }}>
                    <div className="progress-group-header">
                        <span className=""> List of YourTracks</span>
                        <span className="ml-auto"> You Have {datax.length} Tracks</span>
                    </div>
                    <Input.Search placeholder="Search your tracks"/>
                    <br/>
                
                </div>
                <Drawer visible={openEdit} closable onClose={this.handleCancel} width={"70%"} height={"70%"}>
                    <div style={wrapperForm}>
                        <Button onClick={this.handleCancel} style={buttonStyle}>Tutup</Button>
                        <FormUpload receivedata={data} loadPage={countLoad} />
                    </div>
                </Drawer>
                <Table dataSource={datax} columns={columns} size="small" />
            </div>
        )
    }
}
