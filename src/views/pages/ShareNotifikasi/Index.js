import React from 'react'
import { Tabs, Card } from 'antd';
import { SendOutlined, UnorderedListOutlined} from '@ant-design/icons';
import ShareNotifikasi from './ShareNotifikasi'
import HistoryNotifikasi from './HistoryNotifikasi';

const { TabPane } = Tabs;
export default function KirimNotifikasi() {
    return (
        <div>
            <Card title="Notifikasi User">
            <Tabs defaultActiveKey="1">
                <TabPane
                tab={
                    <span>
                    <SendOutlined />
                    Share Notifikasi
                    </span>
                }
                key="1"
                >
                <ShareNotifikasi/>
                </TabPane>
                <TabPane
                tab={
                    <span>
                    <UnorderedListOutlined />
                    History Notifikasi
                    </span>
                }
                key="2"
                >
                <HistoryNotifikasi/>
                </TabPane>
            </Tabs>
            </Card>
        </div>
    )
}
