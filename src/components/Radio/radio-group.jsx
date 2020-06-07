import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class RadioGroup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
RadioGroup.propTypes = {
  //指定当前选中的项目数据。可以使用 v-model 双向绑定数据
  value: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func
};