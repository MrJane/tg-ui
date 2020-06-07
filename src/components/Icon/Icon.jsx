import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//classNames是条件判断输出className的值
import './style.scss';
import './iconfont/iconfont.css'

export default class Icon extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {type, className = '', spin} = this.props;
    const classString = classNames(
      {
        'mine-icon': true,
        [`${type}`]: true
      },className
    );
    return (
      //这里说一下为什么要用omit()：html的<i>标签，其标准标签属性只有六种：id、class、title、style、dir、lang。
      //IconProps接口中的6种属性（方法），type、spin不属于上述六种。onClick为事件属性，可以；
      <i
        className={classString}
        {...this.props}
      />
    )
  }
}
Icon.propTypes = {
  type: PropTypes.string, //配合className，决定了显示的类型
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  spin: PropTypes.bool,  //结合对应的className，控制icon旋转
  style: PropTypes.object //內联样式
};