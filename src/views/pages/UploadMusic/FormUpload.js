import React, { Component } from 'react';
import { Input, Card, Select, Button, Tabs } from 'antd'
import {
    CCol,
    CProgress,
    CRow,
} from '@coreui/react'
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

export default class FormUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFile: [],
            formData: {
                name: null
            }
        }
    }
    async componentDidMount() {
        const data = await this.props.receivedata
        if (data === null) {
            return;
        }
        this.setState({
            dataFile: data
        }, () => {
            this.receivedata(this.state.dataFile)
        })
    }

    receivedata = (e) => {
        let data = []
        e.forEach(i => {
            i._name = i.name
            i.key = e.length ++
            data.push(i)
        })
        console.log(data)
        this.setState({ dataFile: e }, () => {
            console.log(this.state.formData)
        })
    }
    saveData = () => {
        this.props.sendData(null)
    }
    handleName = (e, key) => {
        e.preventDefault()
        const dataFil = this.state.dataFile
        const matchData = dataFil.findIndex((i) => i.key === Number(key))
        dataFil[matchData]._name = e.target.value
        let postData = {...this.state.dataFile}
        postData = dataFil
        this.setState({dataFil, dataFile : postData})
    }
    render() {
        const {dataFile } = this.state
        console.log("edo",dataFile)
  
        const stylesImg = {
            width: "80%",
            height: "200px",
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
        const borderedLayout = {
            // marginBottom : 20,
            paddingTop : 10,
            width : "90%",
            alignItems : "center",
            margin : "20px auto"
        }
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div>
                {dataFile.map((value) => {
                    return (
                        <div style={borderedLayout} className="boxes">
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Basic Info" key="1">
                            <div className="progress-group" style={{ bottom: 0 }}>
                                <div className="progress-group-header">
                                    <span className="title">{value.name}</span>
                                    <span className="ml-auto ">Ready. Click Save to post this track.</span>
                                </div>
                                <div className="progress-group-bars">
                                    <CProgress className="progress-xs" color="warning" style={{ backgroundColor: "#314351", color: "white" }} value="50" />
                                </div>
                            </div>
                            <Card>
                                <CRow>
                                    <CCol sm="4" lg="4"><div style={stylesImg}>THUMBNAIL</div></CCol>
                                    <CCol sm="6" lg="8" >
                                        <span style={styleLabel}>Title</span>
                                        <Input value={value._name} onChange={(event) => this.handleName(event, value.key)} />
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
                          
                            </Card>
                        </TabPane>
                        <TabPane tab="Metadata" key="2">
                          Metadata
                        </TabPane>
                        <TabPane tab="Permissions" key="3">
                        Permsiions
                        </TabPane>
                    
                      </Tabs>
                      <div className="progress-group-header mt-3">
                                    <span className="title"><span style={{ color: "red" }}>*</span> Required Field</span>
                                    <span className="ml-auto ">
                                        <Button style={{ backgroundColor: "white", color: "#314351", marginRight: 5 }}>Cancel</Button>
                                        <Button style={{ backgroundColor: "#314351", color: "white" }} onClick={this.saveData}>Save</Button>
                                    </span>
                                </div>
                      </div>
                    );
                })}
            </div>
        )
    }
}
