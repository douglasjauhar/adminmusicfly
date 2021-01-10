import React, { Component, Fragment } from 'react';
import { Input, Card, Select, Button, Tabs } from 'antd'
import genres from "./data.json"
import {
    CCol,
    CProgress,
    CRow,
} from '@coreui/react'
import Metadata from "./Metadata"
import { ALL_COUNTRY, GENRES } from "../Api/API-Ref"
const { TabPane } = Tabs;
const { Option } = Select;


export default class FormUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFile: [],
            formData: {
                name: null
            },
            countLoad: 0,
            keys: 1,
            country: []
        }
    }
    componentDidUpdate() {
        if (this.props.loadPage !== this.state.countLoad) {
            let data = this.props.receivedata
            this.setState({
                countLoad: this.props.loadPage,
                dataFile: data
            }, () => {
                this.receivedata(this.state.dataFile)
                this.changeKey("1")
            })
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
        this.getCountry()
        this.getGenres()
    }
    getCountry = async () => {
        try {
            let arr = []
            const { data } = await ALL_COUNTRY();
            data.forEach(e => { e = { name: e.name }; arr.push(e) })
            this.setState({ country: arr })
        } catch (e) { }
    }
    getGenres = async () => {
        try {
            const { data } = await GENRES()
            console.log("halo", data)
        } catch (e) { }
    }

    receivedata = (e) => {
        let data = []
        e.forEach(i => {
            i._name = i.name
            i.key = e.length++
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
    changeKey = (e) => {
        console.log("ed", e)
        this.setState({
            keys: e
        })
    }
    handleName = (e, key) => {
        e.preventDefault()
        const dataFil = this.state.dataFile
        const matchData = dataFil.findIndex((i) => i.key === Number(key))
        dataFil[matchData]._name = e.target.value
        let postData = { ...this.state.dataFile }
        postData = dataFil
        this.setState({ dataFil, dataFile: postData })
    }
    render() {
        const { dataFile, keys, country } = this.state
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
            padding: 20,
            width: "90%",
            alignItems: "center",
            margin: "20px auto"
        }
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <Fragment>
                {dataFile.map((value) => {
                    return (
                        <div style={borderedLayout} className="boxes">
                            <div className="progress-group" style={{ bottom: 0 }}>
                                <div className="progress-group-header">
                                    <span className="title">{value.name}</span>
                                    <span className="ml-auto ">Ready. Click Save to post this track.</span>
                                </div>
                                <div className="progress-group-bars">
                                    <CProgress className="progress-xs" color="warning" style={{ backgroundColor: "#314351", color: "white" }} value="50" />
                                </div>
                            </div>
                            <Tabs activeKey={keys} onChange={this.changeKey}>
                                <TabPane tab="Basic Info" key="1">
                                    <Card>
                                        <CRow>
                                            <CCol sm="4" lg="4">
                                                <img src={value.img} style={stylesImg} />
                                            </CCol>
                                            <CCol sm="6" lg="8" >
                                                <span style={styleLabel}><i style={{ color: "red", marginRight: 3 }}>*</i>Title</span>
                                                <Input value={value._name} onChange={(event) => this.handleName(event, value.key)} />
                                                <span style={styleLabel}><i style={{ color: "red", marginRight: 3 }}>*</i>Explicit Content</span>
                                                <Select showSearch style={{ width: '100%' }} onChange={this.handleChange}>
                                                    <Option value="Y">Yes</Option>
                                                    <Option value="N">No</Option>

                                                </Select>
                                                <span style={styleLabel}><i style={{ color: "red", marginRight: 3 }}>*</i>Single Language</span>
                                                <Select showSearch style={{ width: '100%' }} onChange={this.handleChange}>
                                                    {country.map((value) => {
                                                        return (
                                                            <Option
                                                                value={value.name}
                                                            >
                                                                {value.name}
                                                            </Option>
                                                        );
                                                    })}
                                                </Select>
                                                <span style={styleLabel}>Artist</span>
                                                <Input />
                                                <span style={styleLabel}>Album</span>
                                                <Input />
                                                <span style={styleLabel}>Genres</span>
                                                <Select showSearch style={{ width: '100%' }} onChange={this.handleChange}>
                                                    {genres.map((value) => {
                                                        return (
                                                            <Option
                                                                value={value.name}
                                                            >
                                                                {value.name}
                                                            </Option>
                                                        );
                                                    })}
                                                </Select>
                                                <CRow>
                                                    <CCol sm="6" lg="6">
                                                        <span style={styleLabel}>Label Name</span>
                                                        <Input />
                                                    </CCol>
                                                    <CCol sm="6" lg="6">
                                                        <span style={styleLabel}>UPC / EAN Code</span>
                                                        <Input />
                                                    </CCol>
                                                </CRow>
                                                <CRow>
                                                    <CCol sm="6" lg="6">
                                                        <span style={styleLabel}>ISRC</span>
                                                        <Input />
                                                    </CCol>
                                                    <CCol sm="6" lg="6">
                                                        <span style={styleLabel}>Recording Location</span>
                                                        <Input />
                                                    </CCol>
                                                </CRow>
                                            </CCol>
                                        </CRow>
                                    </Card>
                                </TabPane>
                                <TabPane tab="Metadata" key="2">
                                    <Metadata />
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
            </Fragment>
        )
    }
}
