import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Alert extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}