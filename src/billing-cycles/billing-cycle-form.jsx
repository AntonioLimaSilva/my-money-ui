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
        const person = {}
        const totInd1 = this.props.debits
            .map(d =>  d.responsibleName && d.responsibleName.includes('LUCIANO_LIMA')
                && d.hasSplit && +d.value || 0).reduce(sum)
        const totInd2 = this.props.debits
            .map(d => d.responsibleName && d.responsibleName.includes('ELAINE_LIMA')
                && d.hasSplit && +d.value || 0).reduce(sum)
        const media1 = totInd1 / 2;
        const media2 = totInd2 / 2;
        if (totInd1 > totInd2) {
            person.debt = media1 - media2
            person.debtName = 'Elaine'
            person.favoredName = 'Luciano'
        } else {
            person.debt = media2 - media1
            person.debtName = 'Luciano'
            person.favoredName = 'Elaine'
        }
        return {
            subTotalDebit: this.props.debits.map(d => +d.value || 0).reduce(sum),
            totalDebit: this.props.debits.map(d => d.hasSplit && +d.value || 0).reduce(sum),
            totalIndividual1: totInd1,
            totalIndividual2: totInd2,
            person: person
        }
    }

    render() {

        const { handleSubmit, readOnly, debits } = this.props
        const { subTotalDebit, totalDebit, totalIndividual1, totalIndividual2, person } = this.calculateSummary()

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
                        totalIndividual1={ totalIndividual1 } totalIndividual2={ totalIndividual2 } person={ person } />
                    <ItemList cols='12' legend='Lista de débitos' list={ debits } readOnly={readOnly} />
                </div>

                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        { this.props.submitLabel }
                    </button>
                    <button type='button' className='btn btn-default' 
                        onClick={ this.props.init }>Cancelar</button>
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