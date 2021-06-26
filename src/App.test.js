import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders without error', () => {
    const wrapper = shallow(<App />)
    // console.log("wrapper", wrapper.debug());
    expect(wrapper.exists()).toBeTruthy();
});

test('renders button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking on button increments counter display', () => {

});