import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    }
  }

  onChange() {

  }

  onBlur() {

  }

  render() {
    let {checked} = this.state;
    return (
      <label className="mine-radio-wrap">
        <span className={classNames('mine-radio', {'mine-radio-checked': checked})}>
          <span className="mine-radio-inner">

          </span>
            <input
              type="radio"
              className="mine-radio-input"
              disabled={this.props.disabled}
              checked={this.props.checked}
              onChange={this.onChange.bind(this)}
              onBlur={this.onBlur.bind(this)}
            />
        </span>
        <span>
          {this.props.children || this.props.label}
        </span>
      </label>
    )
  }
}
Radio.propTypes = {
  value: PropTypes.string,
  //只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目
  label: PropTypes.string,
  disabled: PropTypes.bool,
  trueValue: PropTypes.bool,
  checked: PropTypes.bool,
  falseValue: PropTypes.bool,
  //选框的尺寸，可选值为 large、small、default 或者不设置
  size: PropTypes.string
};