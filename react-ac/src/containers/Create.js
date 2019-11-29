import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs from '../components/Tabs'
import CategorySelect from '../components/categorySelect'
import PriceForm from '../components/priceForm'
import Loader from '../components/Loader'

class CreatePage extends Component {
    render() {
        return (
            <div className="create-page py-3 px-3 rounded mt-3" style={{ background: '#fff' }}>
                <Loader></Loader>
                <Tabs>
                    <Tab>支出</Tab>
                    <Tab>收入</Tab>
                </Tabs>
                <CategorySelect categories={filterCategories}
                    onSelectCategory={this.selectCategory}
                    selectedCategory={selectedCategory}
                ></CategorySelect>
                <PriceForm
                    onFormSubmit={this.submitForm}
                    onCancelSubmit={this.cancelSubmit}
                    item={editItem}
                ></PriceForm>
                {
            
                }
            </div>
        )
    }
}
export default CreatePage
