// import React from 'react';
// import {Layout} from 'antd';

// const { Header,Footer,Sider,Content}=Layout;

// const BasicLayout=()=>{
//     return (
//         <Layout>
//             <Sider>Sider</Sider>
//             <Layout>
//                 <Header>
//                     Header
//                 </Header>
//                 <Content>
//                     Content
//                 </Content>
//             </Layout>
//         </Layout>

//     );
// }

// export default BasicLayout;

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu ,Icon} from 'antd';
import React from 'react';
import './index'
import SalaryForm from '../views/SalaryForm/SalaryForm';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const BasicLayout = () => (
    <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}
                    items={items2}
                />
                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
                    theme="dark"
                     >
                    <SubMenu key="sub1" title="test" >
                        <Menu.Item key="1" >
                            <Link to="/userList" > 用户列表 </Link>
                        </Menu.Item>
                        <Menu.Item key="2" >
                            <Link to="/form" >表格 </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout
                style={{
                    padding: '0 24px 24px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,

                    }}
                >
                    <div style={{
                        padding: 24,
                        background: '#fff',
                        minHeight: 360
                    }} >
                        <SalaryForm />
                    </div>
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default BasicLayout;