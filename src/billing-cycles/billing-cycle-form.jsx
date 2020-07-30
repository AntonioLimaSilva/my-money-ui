import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/label-and-input'
import ItemList from './items-list'
import Summary from '../billing-cycles/summary'
import { init } from './billing-cycle-actions'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            subTotalDebit: this.props.debits.map(d => +d.value || 0).reduce(sum),
            totalDebit: this.props.debits.map(d => d.hasSplit && +d.value || 0).reduce(sum),
            totalIndividual1: this.props.debits
                .map(d =>  d.responsibleName && d.responsibleName.includes('LUCIANO_LIMA') && +d.value || 0).reduce(sum),
            totalIndividual2: this.props.debits
                .map(d => d.responsibleName && d.responsibleName.includes('ELAINE_LIMA') && +d.value || 0).reduce(sum)
        }
    }

    render() {

        const { handleSubmit, init, readOnly, debits } = this.props
        const { subTotalDebit, totalDebit, totalIndividual1, totalIndividual2 } = this.calculateSummary()

        return (
            <form onSubmit={ handleSubmit } role='form'>
                <div className='box-body'>
                    <Field name='name' component={ LabelAndInput } readOnly={ readOnly }
                        label='Nome' cols='12 4' placeholder='Informe um nome' />
                    <Field name='month' component={ LabelAndInput } readOnly={ readOnly }
                        type='number' label='Mês' cols='12 4' placeholder='Informe um nome' />
                    <Field name='year' component={ LabelAndInput } readOnly={ readOnly } type='number' 
                        label='Ano' cols='12 4' placeholder='Informe um nome'/>
                    <Summary totalDebit={ subTotalDebit } subTotalDebit={ totalDebit }
                        totalIndividual1={ totalIndividual1 } totalIndividual2={ totalIndividual2 } />
                    <ItemList cols='12' legend='Lista de débitos' list={ debits } readOnly={readOnly} />
                </div>

                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        { this.props.submitLabel }
                    </button>
                    <button type='button' className='btn btn-default' 
                        onClick={ init }>Cancelar</button>
                </div>
            </form>
        )
    }
}

// destroyOnUnmount: false => serve para manter os dados no formulário
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = (state) => ({ debits: selector(state, 'debits') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)