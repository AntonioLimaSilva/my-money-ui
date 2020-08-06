import React from 'react'

import Grid from '../layout/grid'
import If from '../template/if'

export default props => (
    <If test={props.value !== 'R$ 0'}>
        <Grid cols={props.cols}>
            <div className={`small-box bg-${props.color}`}>
                <div className='inner'>
                    <h3>{props.value}</h3>
                    <p>{props.text} <span>{props.value}</span></p>

                </div>
                <div className='icon'>
                    <i className={`fa fa-${props.icon}`}></i>
                </div>
            </div>
        </Grid>
    </If>
)