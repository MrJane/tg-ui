import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';
const prefixCls = 'tg-checkbox';
export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked:props.defaultChecked
    }
  }
  _onChange=(e)=>{
    e.persist()
    const checked = e.target.checked;
    const {onChange} = this.props;
   this.setState({
     checked:checked
   });
   console.log(e)
   onChange&&onChange(!checked,e)
  }
  render() {
    const { disabled } = this.props;
    return (
      <label className={classNames('tg-checkbox-wrapper',{'tg-checkbox-wrapper-checked':this.state.checked})}>
        <span className='tg-checkbox'>
          <input
            disabled={disabled}
            type="checkbox"
            className='tg-checkbox-input'
            onChange={this._onChange}
            value={this.state.checked}
          />
          <span className='tg-checkbox-inner'></span>
        </span>
        <span className=''>{this.props.children}</span>
      </label>
    )
  }
}
CheckBox.propTypes = {
  checked: PropTypes.bool,
  //只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中
  label: PropTypes.string,
  //disabled
  disabled: PropTypes.bool,
  trueValue: PropTypes.string,
  falseValue: PropTypes.string
};
CheckBox.defaultProps = {
  checked: false,
  defaultChecked: false,

}