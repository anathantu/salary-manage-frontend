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

import { Breadcrumb, Layout, Menu, Typography } from 'antd';
import React from 'react';
import Logo from './Logo';
import './index.css';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import { routes } from '../configs/routeMap';

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const { Title } = Typography;

const BasicLayout = () => (
    <Layout style={{ minHeight: "100vh" }}>

        <Sider className="site-layout-background" style={{ zIndex: "10" }}>
            <div>
                <h1 className="sidebar-title">薪酬管理系统</h1>
            </div>
            <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
                theme="dark"
            >
                <SubMenu key="sub1" title="薪酬统计" >
                    <Menu.Item key="1" >
                        <Link to="/form" >薪酬数据导入 </Link>
                    </Menu.Item>
                    <Menu.Item key="2" >
                        <Link to="/userList" > 用户列表 </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>

        <Layout
            className="site-layout"
            style={{
                marginLeft: 20,

            }}
        >
            {/* <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}>
                    <div style={{marginLeft:20}}></div>
            </Header> */}
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
                    minHeight: 280
                }}
            >
                <Switch>
                    <div style={{
                                display: 'flex',            
                                display: '-webkit-flex',            
                                justifyContent: 'center',            
                                alignItems: 'center'
                    }}>
                        {
                            routes.map((route) => {
                                return (
                                    <Route
                                        path={route.path}
                                        key={route.path}
                                        component={route.component} />
                                );
                            })
                        }
                        <Redirect to="/error/404" />
                    </div>

                </Switch>
            </Content>
        </Layout>
    </Layout>
);

export default BasicLayout;