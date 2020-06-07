import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mine-slider">
        <div className="mine-slider-rail">

        </div>
        <div className="mine-slider-track">

        </div>
        <div className="mine-slider-handler" tabIndex={0}>

        </div>
      </div>
    )
  }
}
Slider.propTypes = {
  //是否禁用
  disabled: PropTypes.bool,
  //最大值max
  max: PropTypes.number,
  //最小值min
  min: PropTypes.number,
  //双滑块模式
  range: PropTypes.bool,
};