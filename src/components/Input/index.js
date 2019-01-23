import React from 'react';
import './styles.css';

const Input = ({...props}) => {
    return <input 
                type="text" 
                placeholder={props.placeholder || null}
                value={props.value || ''}
                name={props.name}
                onChange={props.onChange}>
            </input>
}

export default Input;