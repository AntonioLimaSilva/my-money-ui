import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import Summary from '../billing-cycles/summary'
import { getSummary, getSummaryShared } from './dashboard-actions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary()
        this.props.getSummaryShared()
    }

    render() {

        const { totalDebit } = this.props.summary
        const { subTotalDebit } = this.props.summaryShared
        const totalIndividual1 = 0
        const totalIndividual2 = 0
        const person = {}

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0.1' />
                <Content>
                    <Summary totalDebit={ totalDebit } subTotalDebit={ subTotalDebit }
                             totalIndividual1={ totalIndividual1 } totalIndividual2={ totalIndividual2 } person={ person }  />
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary,
    summaryShared: state.dashboard.summaryShared
})

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary, getSummaryShared }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)