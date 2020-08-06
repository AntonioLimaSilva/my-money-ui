import React from 'react'
import ValueBox from '../common/widget/value-box'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'

export default ({totalDebit, subTotalDebit, totalIndividual1, totalIndividual2, person}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`R$ ${ subTotalDebit }`} text='Total dos debitos compartilhado' />
                <ValueBox cols='12 4' color='yellow' icon='money'
                    value={`R$ ${ subTotalDebit / 2}`} text='Valor dividido por pessoa' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${ totalDebit }`} text='Total geral dos debitos' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${ totalIndividual1 || 0 }`} text='Total individual de Luciano' />
                <ValueBox cols='12 4' color='aqua' icon='credit-card'
                    value={`R$ ${ totalIndividual2 || 0 }`} text='Total individual de Elaine' />
                <ValueBox cols='12 4' color='yellow' icon='money'
                          value={`R$ ${ person.debt || 0 }`}
                          text={`${person.debtName || ''} deve para ${person.favoredName || ''}`} />
            </Row>
        </fieldset>
    </Grid>
)