import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme';
import Select from './Select'

function setup() {
  const props = {
    onChange: () => {}  
  };

  return shallow(<Select { ...props }/>);
}

test('renders Select componet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Select />, div);
  ReactDOM.unmountComponentAtNode(div);
});

