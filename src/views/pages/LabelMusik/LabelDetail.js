import React, { Component } from 'react'
import { Input, Button, Image } from "antd"
import { CCol, CRow , CButton} from "@coreui/react"
export class LabelDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            oldPage: 0
        }
    }
    componentDidMount() {
        let data = this.props.data
        this.setState({
            data
        })
    }
    componentDidUpdate() {
        let data = this.props.data
        if (this.props.loadPage !== this.state.oldPage) {
            this.setState({
                oldPage: this.props.loadPage,
                data
            })
        }
    }
    render() {
        const { data } = this.state
        const styleImg = {
            height: 200,
            width: "100%",
            alignItems: "center",
            cursor: "pointer"
        }
        const foot = {
            height: "100px",
            width: "100%",
            paddingTop : 10,
            // backgroundColor: "red",
            position: "relative",
            textAlign : "right",
            right : 0,
            bottom :0
        }

        return (
            <div className="boxes">
                <CRow>
                    <CCol sm="12" lg="5">
                        <div>
                            <span>Foto KTP :</span>
                            <Image src={data.fotoKtp} style={styleImg} preview />
                        </div>
                    </CCol>
                    <CCol sm="12" lg="7">
                        <span>Username :</span>
                        <Input value={data.username} className="mb-2" />
                        <span>Nama Label Musik :</span>
                        <Input value={data.nameLabelMusic} className="mb-2" />
                        <span>Alamat Label Musik :</span>
                        <Input value={data.address} className="mb-2" />
                        <span>Nomor KTP :</span>
                        <Input value={data.noKtp} className="mb-2" />
                        <span>Nomor NPWP :</span>
                        <Input value={data.noNpwp} className="mb-2" />
                        <span>Nomor Handphone :</span>
                        <Input value={data.noHp} className="mb-2" />
                        <span>Email :</span>
                        <Input value={data.email} className="mb-2" />



                    </CCol>
                </CRow>
                <CRow>
                   

                </CRow>
                <div style={foot}>
                <span className="title mr-2">
                    <CButton color="success" name="cil-lightbulb" >Approve</CButton>
                    </span>
                    <span className="ml-auto">
                    <CButton color="danger" name="cil-lightbulb" >Reject</CButton>
                        </span>
                </div>

            </div>
        )
    }
}

export default LabelDetail
