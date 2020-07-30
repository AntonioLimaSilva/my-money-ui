import React from 'react'

export default props => (
    <div className="checkbox">
        <label>
            <input {...props.input} type="checkbox" placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type} >{ props.label }</input>
        </label>
    </div>
)
