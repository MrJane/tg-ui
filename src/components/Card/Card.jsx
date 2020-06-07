import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'

export default class Card extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>

      </div>)
  }
}
Card.propTypes = {
  //是否有边框
  bordered:PropTypes.bool,
  //卡片标题
  title:PropTypes.string
};
