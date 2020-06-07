import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

export default class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  toggle() {
    const {disabled} = this.props;
    const {value} = this.state;
    if (disabled) {
      return false;
    }
    this.setState({value: !value});
    console.log(this.state)
  }

  render() {
    const {value} = this.state;
    return (
      <span onClick={this.toggle.bind(this)} className={classNames('mine-switch',{'mine-switch-checked':value})}>
        <input type="text" hidden/>
        <span className="mine-switch-inner">
          {this.props.children}
        </span>
      </span>
    )
  }
}
Switch.propTypes = {
  value: PropTypes.string,
  trueValue: PropTypes.bool,
  falseValue: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};