import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
export default class CheckBoxGroup extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className={classnames('mine-checkbox')}>

      </div>
    )
  }
}
CheckBoxGroup.propTypes = {
  //指定选中的选项	string[]	-	[]
  value:PropTypes.any
};