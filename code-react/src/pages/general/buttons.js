/**
 * Creact by 小公主 on 2019/12/09.
 */
import React, { Component } from 'react'
import { Card, Button, Radio, Row, Col } from 'antd'
// import './index.less'
import BreadcrumbItems from '../../components/breadcrumbitem/BreadcrumbItems'
export default class Buttons extends Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbItems first="基础组件" second="按钮"></BreadcrumbItems>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary">Primary</Button>
                                <Button>Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button type="danger">Danger</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Button type="primary" shape="circle" icon="search" />
                            <Button type="primary" icon="search">
                                Search
                                </Button>
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <br />
                            <Button shape="circle" icon="search" />
                            <Button icon="search">Search</Button>
                            <Button type="dashed" shape="circle" icon="search" />
                            <Button type="dashed" icon="search">
                                Search
                                </Button>
                        </div>
                    </Col>
                </Row>
                <style>{`
                    .button-demo .ant-btn {
                        margin-right: 8px;
                        margin-bottom: 12px;
                    }
                `}</style>
            </div>
        )
    }
}
