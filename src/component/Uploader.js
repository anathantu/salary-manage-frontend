import 'antd/dist/antd.min.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
const { Dragger } = Upload;
const defaultProps = {
  name: 'file',
  multiple: true,

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Uploader = (props) => {
  
  var str = 'http://localhost:8080/readExcel/'+props.type+'/upload'

  return (
  <Dragger {...defaultProps} action={str}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或拖动文件进行上传</p>
    <p className="ant-upload-hint">
    支持批量上传，但请勿重复上传数据，否则薪酬统计时数据会出现错误
    </p>
  </Dragger>);
};

export default Uploader;