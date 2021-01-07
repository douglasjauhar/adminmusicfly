import data from "./data.json"
import React from 'react'
import {Table} from 'antd'
export default function HistoryNotifikasi() {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Sender',
            dataIndex: 'sender',
            key: 'sender',
          },
          {
            title: 'Sender',
            dataIndex: 'sender',
            key: 'sender',
          },
          {
            title: 'Receiver',
            dataIndex: 'receiver',
            key: 'receiver',
          },
          {
            title: 'Date Share',
            dataIndex: 'date',
            key: 'date',
          },
    ]
    return (
        <div>
           <Table columns={columns} dataSource={data}/>
        </div>
    )
}
