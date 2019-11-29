import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import { Colors } from '../unit'
class Loader extends Component {
    render() {
        return (
            <div className="loading-component text-center">
                <Ionicon icon="ios-refresh"
                    fontSize="40px"
                    color={Colors.blue}
                    rotate={true}
                />
                <h5>加载中</h5>
            </div>
        )
    }
}

export default Loader
