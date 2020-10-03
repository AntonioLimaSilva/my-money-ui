import React from 'react'

export default props => (
    <div className="checkbox">
        <label>
            <input {...props.input} placeholder={props.placeholder}
                disabled={props.readOnly}
                type={props.type} >{ props.label }</input>
        </label>
    </div>
)
