import SalaryForm from "../../component/SalaryForm/SalaryForm";
import { Button,DatePicker } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import './index.css';
import { statistic } from "../../api/excel";

const statistic=()=>{

}

const dateChange=()=>{
    
}

const UploadExcels = () => {

    return (
        <div style={{ backgroundColor: "#fff", height: "40vw", width: "50vw", padding: "5vw" }}>
            <div>
                <SalaryForm />
            </div>
            <div style={{padding: "20px",margin: "0 20px"}}>
                <span style={{  fontWeight: 600 }}>进行薪酬数据统计并导出:</span>
                <DatePicker onChange={dateChange} picker="year" />
                <div className="statistic-button">
                    <Button type="primary" icon={<DownloadOutlined />} size={"large"} >
                        导出统计数据
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UploadExcels;