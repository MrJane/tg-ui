import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null
}

export default class Affix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      affixStyle:{}
    };
    this.setTargetEventListeners = this.setTargetEventListeners.bind(this)
  }

  componentDidMount() {
    //首先是在Didmount的时候，这时候首先确定当前的一个固定节点是Window还是传入的DOM节点，
    const target = this.props.target || getDefaultTarget;

  }

//给目标元素设置监听事件
  setTargetEventListeners(getTarget) {
    // 得到当前固定节点
    const target = getTarget();
    if (!target) return;
  }

  render() {
    //构建样式类名
    const className = classNames();
    return (
      <div className="mine-affix">
        <div>

        </div>
      </div>
    )
  }
}
Affix.propTypes = {
  //距离窗口顶部达到指定偏移量后触发
  offsetTop: PropTypes.number,
  //距离窗口底部达到指定偏移量后触发
  offsetBottom: PropTypes.number,
//设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
  target: PropTypes.func,
  style: PropTypes.object
};