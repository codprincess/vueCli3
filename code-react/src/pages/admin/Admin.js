import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Headers from '../../components/headers/Headers';
import NavLeft from '../../components/navleft/NavLeft';
export default class Admin extends Component {
    render() {
        return (
            <div>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <NavLeft></NavLeft>
                    </Col>
                    <Col span={21} className="main">
                       <Headers></Headers>
                    </Col>
                   
                </Row>
            </div>
        )
    }
}
