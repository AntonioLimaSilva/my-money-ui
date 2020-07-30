import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentHeader from '../common/template/content-header'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabs-header'
import TabsContent from '../common/tab/tabs-content'
import TabHeader from '../common/tab/tab-header'
import TabContent from '../common/tab/tab-content'
import List from './billing-cycles-list'
import Form from './billing-cycle-form'
import { add, update, remove, init } from '../billing-cycles/billing-cycle-actions'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {

        return (
            <div>
                <ContentHeader title='Ciclo de pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabRemove' />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={ this.props.add } submitClass='primary'
                                    submitLabel='Incluir'  />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={ this.props.update } submitClass='info'
                                    submitLabel='Editar'  />
                            </TabContent>
                            <TabContent id='tabRemove'>
                                <Form onSubmit={ this.props.remove } readOnly={true} 
                                    submitClass='danger' submitLabel='Excluir'  />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ add, update, remove, init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)