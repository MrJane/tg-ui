import React from 'react';
import Child from "./Child";
import Button from "./components/Button/Button";
import ButtonGroup from "./components/Button/ButtonGroup";
import CheckBox from "./components/CheckBox/CheckBox";
import CheckBoxGroup from "./components/CheckBox/CheckBoxGroup";
import Radio from "./components/Radio/Radio";
import RadioGroup from "./components/Radio/radio-group";
import Affix from "./components/Affix/Affix";
import Switch from "./components/Switch/Switch";
import BackTop from "./components/BackTop/BackTop";
import Slider from "./components/Slider/Slider";
import Input from "./components/Input/Input";
import Icon from "./components/Icon/Icon";
import './App.css';
import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  parentTest() {
    console.log(this.child);
    this.child.test();
  }

  onChange(e) {
    console.log('我是父元素的打印',e);

  }

  render() {
    return (
      <div className="App">
        <Child ref={(child) => {
          this.child = child
        }}>
        </Child>
        <hr/>
        <Button className="mine" disabled>默认测试按钮</Button>
        <hr/>
        <ButtonGroup>
          <Button>测试按钮组一</Button>
          <Button>测试按钮组二</Button>
        </ButtonGroup>
        <hr/>
        <Radio checed label={'测试radio'}>

        </Radio>
        <hr/>
        <Switch>

        </Switch>
      </div>
    );
  }
}


