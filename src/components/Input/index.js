import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import styles from './styles.scss';

class Input extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string
  };

  render() {
    const {
      className,
      name,
      value,
      onChange,
      placeholder,
      error,
      errorText
    } = this.props;

    return (
      <div>
        <input
          className={error && 'error'}
          type="text"
          placeholder={placeholder || null}
          value={value || ""}
          name={name}
          onChange={onChange}
        />
        {error && errorText && <p className='error-text'>{errorText}</p>}
      </div>
    );
  }
}

export default Input;