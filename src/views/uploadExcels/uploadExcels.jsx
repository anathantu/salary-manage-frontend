import SalaryForm from "../../component/SalaryForm/SalaryForm";
import { Button, DatePicker, Space, notification } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import './index.css';
import request from "../../utils/request.js"
import { statistic } from "../../api/excel";


const openNotificationWithIcon = (type) => {

    const config = {
        'success': {
            message: '薪酬统计成功',
            description:
                '薪酬统计成功，并且已经保存到数据库和本地',
        },
        'error': {
            message: '薪酬统计失败',
            description:
                '薪酬统计失败，请确认数据是否都上传和时间是否选择了',
        }
    }
    
    notification[type](config[type]);
};

const UploadExcels = () => {

    var year

    const onClick = () => {
        statistic(year).then((response) => {
            openNotificationWithIcon('success')
        }).catch((errror) => {
            openNotificationWithIcon('error')
        })
    }

    const dateChange = (date, dateString) => {
        console.log(date, dateString);
        year = dateString
    };

    return (

        <div style={{ backgroundColor: "#fff", height: "40vw", width: "50vw", padding: "5vw" }}>
            <Space
                direction="vertical"
                size="large"
            >
                <div>
                    <SalaryForm />
                </div>
                <Space direction="horizontal" align="start" size="middle">
                    <Space>
                        <span style={{ fontWeight: 600 }}>进行薪酬数据统计并导出:</span>
                    </Space>
                    <Space direction="vertical" size="middle">
                        <DatePicker onChange={dateChange} picker="year" />
                        <div className="statistic-button">
                            <Button type="primary" icon={<DownloadOutlined />} size={"middle"} onClick={onClick}>
                                导出统计数据
                            </Button>
                        </div>
                    </Space>

                </Space>
            </Space>
        </div >

    )
}

export default UploadExcels;