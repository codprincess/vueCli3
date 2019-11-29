import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { Colors } from '../utility'
class CategorySelect extends Component {
    render() {
        return (
            <div className="category-select-component"> 
                <div className="row">
                    <div className="" role="button" style={{ textAlign: 'center' }}>
                        <Ionicon
                            className="rounded-circle"
                            style={{ backgroundColor: backColor, padding: '5px' }}
                            fontSize="50px"
                            color={iconColor}
                            icon={category.iconName}
                        />
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CategorySelect