import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e)
  };

  render() {
    const {className, type, size} = this.props;
    const precfix = 'mine-button';
    return (
      <button
        className={classNames('mine-button', className, `mine-button-${type}`, size&&`mine-button-${size}`)}
        disabled={this.props.disabled}
        type={this.props.htmlType}
        onClick={this.onClick}
      >
        <span>{this.props.children}</span>
      </button>
    )
  }
}
Button.propTypes = {
  //按钮类型：default、primary、dashed、text、info、success、warning、error或者不设置
  type: PropTypes.string,
  //按钮失效状态
  disabled: PropTypes.bool,
  //size按钮大小
  size: PropTypes.string,
  //原生属性
  htmlType: PropTypes.string,
  //icon
  icon: PropTypes.string,
  //点击事件
  onClick: PropTypes.func
};
Button.defaultProps = {
  type: 'default',
};