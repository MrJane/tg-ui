import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    //组件状态的值从props的value和defaultValue值取
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    this.state = {
      value
    }
  }

  onChange(e) {
    this.props.onChange && this.props.onChange(e)
  }

  handleBlur() {
    const {onBlur} = this.props;
    onBlur && onBlur();
  }

  //失焦事件
  handleFocus(e) {
    const {onFocus} = this.props;
    onFocus && onFocus();
  }

  render() {
    const {value} = this.state;
    return (
      <div className="mine-input-wrap">
        <input
          ref={(input) => this.input = input}
          type={this.props.type}
          disabled={this.props.disabled}
          placeholder={this.props.placeholder}
          onChange={this.onChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          value={value}
        />
      </div>
    )
  }
}
Input.propTypes = {
  //带标签的 input，设置后置标签
  addonAfter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  //addonBefore;带标签的 input，设置前置标签
  addonBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  //是否禁用状态，默认为 false
  disabled: PropTypes.bool,
  //type：input 类型，同原生 input 标签的 type 属性
  type: PropTypes.string,
  //size:可选large default small
  size: PropTypes.string,
  placeholder: PropTypes.string,
  //输入框内容变化时的回调
  onChange: PropTypes.func,
  //输入框默认内容：defaultValue
  defaultValue: PropTypes.string,
  //输入框内容:value
  value: PropTypes.string
};
Input.defaultProps = {
  disabled: false,
  type: 'text'
};