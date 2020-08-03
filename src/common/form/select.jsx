import React, { Component } from 'react'

export default class select extends Component {

    renderOptions() {
        const list = this.props.list || []

        return list.map( e =>  (
            <option key={e.value} value={e.value}>{e.label}</option>
        ))
    }
    
    render() {
        return (
            <select {...this.props.input}
                className='form-control'
                placeholder={this.props.placeholder}
                disabled={this.props.readOnly}
                type={this.props.type}>
                <option>Selecione um item</option>

                { this.renderOptions() }
            </select>
        )
    }
}