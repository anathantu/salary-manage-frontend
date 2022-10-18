import SalaryForm from "../../component/SalaryForm/SalaryForm";
import { Button, DatePicker, Space, notification } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import './index.css';
import request from "../../utils/request.js"
import { statistic } from "../../api/excel";
import { deleteAllData } from "../../api/data"
import { useState } from "react";


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

const deleteAllNotification= (type) => {

    const config = {
        'success': {
            message: '删除数据成功',
            description:
                '删除数据成功，可以重新导入数据了',
        },
        'error': {
            message: '删除数据失败',
            description:
                '删除数据失败',
        }
    }

    notification[type](config[type]);
};

const UploadExcels = () => {

    const [loadings, setLoadings] = useState([])

    const [date,setDate] = useState()

    const onClick = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        statistic(date).then((response) => {
            openNotificationWithIcon('success')
        }).catch((error) => {
            openNotificationWithIcon('error')
        }).finally(() => {
            setTimeout(() => {
                setLoadings((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    return newLoadings;
                });
            }, 0);
        })

    }

    const dateChange = (date, dateString) => {
        setDate(dateString)
    }

    const deleteAll = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });


        deleteAllData().then((response) => {
            if(response.data==true)
                deleteAllNotification('success')
            else
                deleteAllNotification('error')
        }).catch((error) => {
            deleteAllNotification('error')
        }).finally(() => {
            setTimeout(() => {
                setLoadings((prevLoadings) => {
                    const newLoadings = [...prevLoadings];
                    newLoadings[index] = false;
                    return newLoadings;
                });
            }, 0);
        })
    }

    return (

        <div style={{ backgroundColor: "#fff",height: "100%", width: "50vw", padding: "5vw" }}>
            <Space
                direction="vertical"
                size="large"
            >
                <div>
                    <SalaryForm />
                </div>
                <Space direction="horizontal" align="start" size="middle">
                    <Space>
                        <span style={{ fontWeight: 600 }}>清空导入的数据:</span>
                    </Space>
                    <Space>
                        <Button type="primary" danger onClick={() => deleteAll(0)} loading={loadings[0]}>
                            数据清零
                        </Button>
                    </Space>
                </Space>
                <Space direction="horizontal" align="start" size="middle">
                    <Space>
                        <span style={{ fontWeight: 600 }}>进行薪酬数据统计并导出:</span>
                    </Space>
                    <Space direction="vertical" size="middle">
                        <DatePicker onChange={dateChange} picker="year" />
                        <div className="statistic-button">
                            <Button type="primary" icon={<DownloadOutlined />} size={"middle"}
                                onClick={() => onClick(1)} loading={loadings[1]}>
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