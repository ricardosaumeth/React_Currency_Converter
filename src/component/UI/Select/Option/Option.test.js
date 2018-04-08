import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme';
import Option from './Option'

function setup() {
  const props = {
    value: 'USD', text: 'USD'  
  };

  return shallow(<Option value={props.value} text={props.text}/>);
}

test('renders Option componet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Option />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders description of the currency', () => {
  const option = shallow(<Option value={'USD'} text={'USD'}/>);
  expect(option.text()).toEqual('US dollar');
});

test('renders length of the option', () => {
  const wrapper = setup();
  expect(wrapper.find('option').length).toBe(1);
});

test('renders the html format of the option element', () => {
  const wrapper = setup();
  expect(wrapper.find('option').getElement()).toEqual(<option value="USD">US dollar</option>);
});