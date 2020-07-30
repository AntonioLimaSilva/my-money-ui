import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import Summary from '../billing-cycles/summary'
import { getSummary, getSummaryShared } from './dashboard-actions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.getSummary(),
        this.props.getSummaryShared()
    }

    render() {

        const { totalDebit } = this.props.summary
        const { subTotalDebit } = this.props.summaryShared

        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0.0' />
                <Content>
                    <Summary totalDebit={ totalDebit } subTotalDebit={ subTotalDebit } />
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