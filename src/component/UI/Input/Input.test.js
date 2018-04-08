import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme';
import Input from './Input'

function setup() {
  const props = {
    value: 'USD', placeholder: 'Please type...', onChange: () => {}  
  };

  return shallow(<Input value={props.value} placeholder={props.text} { ...props }/>);
}

test('renders Option componet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders length of the option', () => {
  const wrapper = setup();
  expect(wrapper.find('input').length).toBe(1);
});

test('renders the html format of the option element', () => {
  const wrapper = setup();
  expect(wrapper.find('input').getElement()).toEqual(<input value="USD" placeholder='Please type...'></input>);
});