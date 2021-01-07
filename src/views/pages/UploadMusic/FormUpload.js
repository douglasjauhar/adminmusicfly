import React, { Component } from 'react'
// import { CRow, CCol } from '@coreui/react';
import { Input, Card, Select , Button} from 'antd'
import {
    CCol,
    CProgress,
    CRow,
  } from '@coreui/react'
const { TextArea } = Input;
const { Option } = Select;

export default class FormUpload extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataFile : null,
            formData : {
                name : null
            }
        }
    }
    componentDidMount(){
        const data = this.props.receivedata
        if(data === null){
            return;
        }
        this.setState({
            dataFile : data
        }, () => {
           this.receivedata(this.state.dataFile)
        })
    }

    receivedata = (e) => {
        const name = e.name.replace(".mp3", "")
        const data = this.state.formData
        data.name = name
        this.setState({formData : data}, ()=> {
            console.log(this.state.formData)
        })
    }
    render() {
        const {formData} = this.state
        // console.log("dari child", dataFile === null ? false : dataFile.name)
        const stylesImg = {
            width: "80%",
            height: "260px",
            backgroundColor: "grey",
            marginBottom: "10px",
            color: "black",
            fontSize: 24,
            textAlign: "center",
            margin: "auto",
            marginTop: 10
        }
        const styleLabel = {
            paddingBottom: "100px",
            fontSize: 12
        }
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                <div className="progress-group" style={{bottom : 0}}>
                    <div className="progress-group-header">
                        <span className="title">{formData.name}</span>
                        <span className="ml-auto ">Ready. Click Save to post this track.</span>
                    </div>
                    <div className="progress-group-bars">
                        <CProgress className="progress-xs" color="warning" style={{backgroundColor : "#314351", color : "white"}} value="50" />
                    </div>
                </div>
                <Card>
                    <CRow>
                        <CCol sm="4" lg="4"><div style={stylesImg}>THUMBNAIL</div></CCol>
                        <CCol sm="6" lg="8" >
                            <span style={styleLabel}>Title</span>
                            <Input value={formData.name} />
                            <span style={styleLabel}>Artist</span>
                            <Input />
                            <span style={styleLabel}>Album</span>
                            <Input />
                            <span style={styleLabel}>Genre</span>
                            <Input />
                            <span style={styleLabel}>Additional Tags</span>
                            <Select mode="tags" style={{ width: '100%' }} onChange={this.handleChange} tokenSeparators={[',']}>
                                {children}
                            </Select>
                            <span style={styleLabel}>Description</span>
                            <TextArea rows={4} />
                            <span style={styleLabel}>Caption</span>
                            <TextArea rows={3} />
                        </CCol>
                    </CRow>
                    <div className="progress-group-header mt-3">
                        <span className="title"><span style={{color : "red"}}>*</span> Required Field</span>
                        <span className="ml-auto ">
                        <Button style={{backgroundColor : "white", color : "#314351", marginRight : 5}}>Cancel</Button>
                           <Button style={{backgroundColor : "#314351", color : "white"}}>Save</Button>
                        </span>
                    </div>
                </Card>
            </div>
        )
    }
}
