import React from 'react';
import './styles.scss';

const Button = ({...props}) => {
    return <button 
                disabled={props.loading}
                className={props.className}
                onClick={props.onClick}>
                { props.children }
            </button>
}

export default Button;