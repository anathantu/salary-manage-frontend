import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import App from './App';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class SalaryForm extends React.Component {
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
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择薪酬数据表的类型"
            onChange={this.onGenderChange}
            allowClear
          >
            <Option value="basicSalary">基础薪资</Option>
            <Option value="performance">绩效工资</Option>
            <Option value="specialAward">专项奖</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) =>
            getFieldValue('gender')  ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <App/>
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={this.onFill}>
            Fill form
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default SalaryForm;