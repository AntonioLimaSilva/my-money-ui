import React from 'react'

export default props => (
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        disabled={props.readOnly}
        type={props.type} />
)