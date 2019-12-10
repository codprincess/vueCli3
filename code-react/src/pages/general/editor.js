import React, { Component } from 'react'
import BreadcrumbItems from '../../components/breadcrumbitem/BreadcrumbItems'
class Editor extends Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbItems first="基础组件" second="富文本"></BreadcrumbItems>
            </div>
        )
    }
}

export default Editor