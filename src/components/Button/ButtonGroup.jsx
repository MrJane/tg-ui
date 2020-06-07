import React from 'react';

export default class ButtonGroup extends React.Component {
  render() {
    console.log(this.props.children);
    return (
      <div className='mine-button-group'>
        {this.props.children}
      </div>
    )
  }
}