import { Form, Input, Button, Select } from 'antd';
import React from "react"
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

export default class ShareNotifikasi extends React.Component {
  formRef = React.createRef();
  onGenderChange = (value) => {
    switch (value) {
      case 'male':
        this.formRef.current.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        this.formRef.current.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        this.formRef.current.setFieldsValue({
          note: 'Hi there!',
        });
        return;
    }
  };
  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  render() {
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
          <Form.Item
          name="to"
          label="To"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Pilih kepada siapa notifikasi akan dikirim"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="male">User Free</Option>
            <Option value="female">User Premium</Option>
            <Option value="other">User Label Music</Option>
            <Option value="other">Semua User</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Masukkan Judul Notifikasi"/>
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea placeholder="Masukkan Deskripsi Notifikasi"/>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Kirim Notifikasi
          </Button>
          {/* <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button> */}
        </Form.Item>
      </Form>
    );
  }
}