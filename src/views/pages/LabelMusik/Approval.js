import React, { Component } from 'react'
import { Input, Table, Row, Col, Badge, Tag, Drawer, Tooltip } from "antd"
import { CheckCircleOutlined, EyeOutlined, CloseCircleOutlined } from "@ant-design/icons"
import LabelDetail from './LabelDetail'

export default class Approval extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openData: false,
            data: [],
            countLoad: 0
        }
    }
    openModal = (e) => {
        this.setState({
            openData: true,
            data: e,
            countLoad: this.state.countLoad + 1
        })
    }
    actionData = (e) => {
        const styles = {
            fontSize: 16,
            color: "#314351",
            marginRight: 10
        }
        return (
            <>
                <Tooltip placement="topLeft" title={"Lihat Detail Label Musik"}>
                    <EyeOutlined style={styles} onClick={() => { this.openModal(e) }} />
                </Tooltip>
                <Tooltip placement="topLeft" title={"Approve Label Musik"}>
                    <CheckCircleOutlined style={styles} onClick={() => { this.openModal(e) }} />
                </Tooltip>
                <Tooltip placement="topLeft" title={"Reject Label Musik"}>
                    <CloseCircleOutlined style={styles} onClick={() => { this.openModal(e) }} />
                </Tooltip>



            </>
        )
    }
    handleCancel = () => {
        this.setState({ openData: false })
    }
    render() {
        const { openData, data, countLoad } = this.state
        const wrapperForm = {
            marginBottom: "100px"
        }
        const dataSource = [
            {
                key: '1',
                username: 'labelmusik1',
                nameLabelMusic: 'Nama Label Musik A',
                address: 'Jl. Perintis Kemerdekaan 1',
                noKtp: "33831831938918381",
                noNpwp: "87896876785856568",
                noHp: "0812345646",
                fotoKtp: "https://qph.fs.quoracdn.net/main-qimg-f2c8c39bad640f82050ac1361bbc2091",
                email: "adminlabel1@mail.com",
                status: "N"
            },
            {
                key: '2',
                username: 'labelmusik2',
                nameLabelMusic: 'Nama Label Musik B',
                address: 'Jl. Perintis Kemerdekaan 2',
                noKtp: "33831831938918381",
                noNpwp: "87896876785856568",
                noHp: "0812345646",
                fotoKtp: "https://qph.fs.quoracdn.net/main-qimg-f2c8c39bad640f82050ac1361bbc2091",
                email: "adminlabel1@mail.com",
                status: null
            },
            {
                key: '3',
                username: 'labelmusik3',
                nameLabelMusic: 'Nama Label Musik C',
                address: 'Jl. Perintis Kemerdekaan 3',
                noKtp: "33831831938918381",
                noNpwp: "87896876785856568",
                noHp: "0812345646",
                fotoKtp: "https://qph.fs.quoracdn.net/main-qimg-f2c8c39bad640f82050ac1361bbc2091",
                email: "adminlabel1@mail.com",
                status: null,
            },
        ];

        const columns = [
            {
                title: '#',
                dataIndex: 'key',
                key: 'key',
            },
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Nama Label Musik',
                dataIndex: 'nameLabelMusic',
                key: 'nameLabelMusic',
            },
            {
                title: 'Alamat',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Status',
                key: 'status',
                dataIndex: 'status',
                render: status => {
                    let color = status == "Y" ? "blue" : status == "N" ? "red" : "gray"
                    return (
                        <Tag color={color}>
                            {status == "Y" ? "Diterima" : status == "N" ? "Ditolak" : "Belum diverifikasi"}
                        </Tag>
                    );
                }
            },
            {
                title: 'Action',
                key: 'x',
                fixed: 'right',
                width: 100,
                render: (record) => this.actionData(record)
            },
        ];
        return (
            <>
                <Drawer visible={openData} onClose={this.handleCancel}
                    closable
                    title="Detail Label Musik"
                    width="70%"
                    height="70%"
                >
                    <div style={wrapperForm}>
                        <LabelDetail data={data} loadPage={countLoad} />
                    </div>
                </Drawer>
                <Row>
                    <Col span={24}>
                        <Input.Search />
                    </Col>
                </Row>
                <br/>
                <Table dataSource={dataSource} columns={columns} size="small" />;
            </>
        )
    }
}
