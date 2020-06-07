import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
}