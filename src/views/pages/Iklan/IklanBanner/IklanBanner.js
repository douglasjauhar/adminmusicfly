import { Card, Form, Input, Button,  Upload } from 'antd'
import React, { Component } from 'react'
import ListIklanBanner from './ListIklanBanner';
import ImgCrop from 'antd-img-crop';
import "./cssForm.css"




export class IklanBanner extends Component {
    constructor(props){
        super(props)
        this.state = {
            fileList : []
        }
    }
    onChange = ({fileList : newFileList}) => {
        if(newFileList.length >= 1){
            let temp = []
            newFileList.forEach(e => {
                delete e.response
                e.status = null
                temp.push(e)
            })
            this.setState({fileList : newFileList})
            console.log(newFileList, temp)
        }
 
    
    }

    
    render() {
        const onPreview = async file => {
            let src = file.url;
            if (!src) {
              src = await new Promise(resolve => {
                const reader = new FileReader();
                console.log("apa",reader)
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
                console.log(reader.result)
              });
            }
            const image = new Image();
            image.src = src;
            const imgWindow = window.open(src);
            imgWindow.document.write(image.outerHTML);
          };
   
        const {fileList} = this.state
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 16 },
        };
        return (
            <>
                <Card title="Iklan Popup Banner">
                    <div className="boxes">
                        <p style={{textAlign : 'center', fontSize : "18px"}}>Tambahkan  Banner</p>
                        <hr/>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                            placeholder="Masukkan Judul Ads"
                            rules={[{ required: true, message: 'Please input your title!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            placeholder="Masukkan Deskripsi Ads"
                            rules={[{ required: true, message: 'Please input your description!' }]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <ImgCrop rotate>
                                <Upload
                                    listType="picture-card"
                                    // fileList={fileList}
                                    onChange={this.onChange}
                                    onPreview={onPreview}
                                    multiple={false}
                                >
                                    {fileList.length < 5 && '+ Upload'}
                                </Upload>
                            </ImgCrop>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                           </Button>
                        </Form.Item>
                    </Form>
                    </div>

                    <ListIklanBanner />
                </Card>
            </>
        )
    }
}

export default IklanBanner
