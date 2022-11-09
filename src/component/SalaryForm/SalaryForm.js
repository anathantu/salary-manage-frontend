import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import Uploader from '../Uploader';
import './index.css';

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
    this.formRef.current.setFieldsValue({
      type: value,
    });
  };
  onFinish = (values) => {
    console.log(values);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };

  render() {
    return (
      <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Form.Item
          name="type"
          label="薪酬统计类型"
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
            <Option value="employee">员工基础信息表</Option>
            <Option value="salary">基础薪资</Option>
            <Option value="performanceBonus">绩效工资</Option>
            <Option value="specialAward">专项奖</Option>
            <Option value="insurance">五险</Option>
            <Option value="annuity">年金</Option>
            <Option value="providentFund">公积金</Option>
            <Option value="suppleMedical">补充医疗</Option>
            <Option value="susidy">津贴（劳保费、探亲补助、图书费、稳岗补贴抵扣和餐补）</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.type !== currentValues.type}
        >
          {({ getFieldValue }) =>
            getFieldValue('type') ? (
              <Form.Item
                name="customizeType"
                label="请导入对应类型的数据文件"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Uploader type={getFieldValue('type')} />
              </Form.Item>
            ) : null
          }
        </Form.Item>
      </Form>
    );
  }
}

export default SalaryForm;