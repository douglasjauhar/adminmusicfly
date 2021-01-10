import React, { Component } from 'react'
import {
    CCol,
    CRow,
} from '@coreui/react'
import { Input, DatePicker } from "antd"
const { TextArea } = Input;
export class Metadata extends Component {
    render() {
        const styleLabel = {
            paddingBottom: "100px",
            fontSize: 12
        }
        return (
            <div>
                <CRow>
                <CCol sm="6" lg="6">
                        <span style={styleLabel}>Song Writters</span>
                        <Input />
                    </CCol>
                    <CCol sm="6" lg="6">
                        <span style={styleLabel}>Release Date</span>
                        <DatePicker showTime onChange={this.onChange} onOk={this.onOk} style={{width : "100%"}}/>
                    </CCol>
                </CRow>
                <br></br>
                <CRow>
                    <CCol>
                        <span style={styleLabel}>Lyrics</span>
                        <TextArea rows="4" />
                    </CCol>
                </CRow>
                <hr />
                <CRow>
                    <CCol>
                        <span style={styleLabel}>Buy - link</span>
                        <Input />
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <span style={styleLabel}>Description</span>
                        <TextArea rows="3" />
                    </CCol>
                </CRow>
              
              


            </div>
        )
    }
}

export default Metadata
