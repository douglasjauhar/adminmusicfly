import React, { Component } from 'react'
import Dropzone from "../Dropzone/Dropzone"
import {Row} from "antd"
export default class IklanSlide extends Component {
    render() {
        return (
           <div>
               <Row>
                   {/* <Col span={12}> */}
                   <Dropzone/>
                   {/* </Col>
                   <Col span={12}>
                   <ListImageSlide/>
                   </Col> */}
               </Row>
          
           </div>
        )
    }
}
