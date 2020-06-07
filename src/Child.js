import React from 'react';

export default class Child extends React.Component{
  test=()=>{
    console.log('child')
  };
  render() {
    return (
      <div> hello</div>
    )
  }

}