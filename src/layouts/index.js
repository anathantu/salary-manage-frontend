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
        <Header>
            <Logo/>
        </Header>
        <Layout>
            <Sider theme="light">
                <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                    <SubMenu key="sub1" title="薪酬统计" >
                        <Menu.Item key="1" >
                            <Link to="/form" >薪酬数据导入 </Link>
                        </Menu.Item>
                        <Menu.Item key="2" >
                            <Link to="/userList" > 薪酬数据查询 </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>

            <Layout
                style={{
                    marginLeft: 20,
                }}
                
            >
                <Content
                    style={{
                        padding: "24px",
                        margin: "0 auto"
                    }}
                    className="site-layout-background"
                >
                    <Switch>
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
                    </Switch>
                </Content>
            </Layout>
        </Layout>


    </Layout>
);

export default BasicLayout;