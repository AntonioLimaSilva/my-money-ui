import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import Checkbox from '../common/form/checkbox'
import Select from '../common/form/select'

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', 'debits', index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', 'debits', index)
        }
    }

    renderRows() {

        const list = this.props.list || []
        const names = [{ value : 'LUCIANO_LIMA', label: 'Luciano Lima' }, 
                        { value: 'ELAINE_LIMA', label: 'Elaine Lima'} ]
        const status = [{value: 'PAGO', label: 'Pago'}, {value: 'PENDENTE', 
                        label: 'Pendente'}, {value: 'AGENDADO', label: 'Agendado'}]
        
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={ `debits[${index}].name` } placeholder='Informe um nome' 
                        readOnly={ this.props.readOnly } component={ Input }>
                    </Field>
                </td>
                <td>
                    <Field name={ `debits[${index}].value` } placeholder='Informe um valor' 
                        readOnly={ this.props.readOnly } component={ Input } type='number'>
                    </Field>
                </td>
                <td>
                    <Field name={ `debits[${index}].responsibleName` } placeholder='Informe um responsável' 
                        readOnly={ this.props.readOnly } component={ Select } 
                        list={ names }>
                    </Field>
                </td>
                <td>
                    <Field name={ `debits[${index}].status` } placeholder='Informe um status' 
                        readOnly={ this.props.readOnly } component={ Select } list={ status }>
                    </Field>
                </td>
                <td>
                    <Field name={ `debits[${index}].hasSplit` }  placeholder='Informe um status' 
                        readOnly={ this.props.readOnly } component={ Checkbox } type='checkbox'>
                    </Field>
                </td>
                <td>
                    <button type='button' className='btn btn-success' disabled={ this.props.readOnly }
                        onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' className='btn btn-warning' disabled={ this.props.readOnly }
                        onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button' className='btn btn-danger' disabled={ this.props.readOnly }
                        onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Responsável</th>
                                <th>Status</th>
                                <th>Ratear?</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderRows() }
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(ItemList)