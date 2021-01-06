import React, { Component } from 'react'
// import 'react-quill/dist/quill.snow.css';
import ReactQuill , {Quill}from "react-quill"
// import  ImageResize  from 'quill-image-resize-module';
import {Card} from "antd"
import axios from "axios"

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '', images : '' }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        // Quill.register('modules/ImageResize', ImageResize);
    }
    handleChange(value) {
        this.setState({ text: value }, ()=> {
            console.log(this.state.text)
        })
    }

    imageHandler  () {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append('image', file);
            formData.append('key', '85898c1ce169bbb04281c4e25fb118ad' )
            const range = this.quill.getSelection(true);
            this.quill.setSelection(range.index + 1);

            try{
                const {data} = await axios.post("https://api.imgbb.com/1/upload", formData)
                 const  url = data.data.url
                 console.log("ewq2",url)
                 this.quill.insertEmbed(range.index, 'image', url);  
            }catch(e){
                console.log(e)
            }
        };
    }
  
    render() {
        const contents = {
            // ImageResize : {},
            toolbar: {
                container: [
                    [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                    [{ size: [] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image', 'video'],
                    ['clean'],
                ],
                handlers: {
                    image: this.imageHandler
                }
        }
    }
        return (
            <div>
                <Card title="Content FAQ">
                <ReactQuill 
                    value={this.state.text}
                    onChange={this.handleChange}
                    modules={contents}     
                    />
                </Card>
            </div>
        )
    }
}


