import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders the login form with email and password inputs', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[name="email"]')).toHaveLength(1);
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
  });

  it('renders a button with the text "OK"', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button').text()).toEqual('OK');
  });

  it('applies correct styles', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('p').hasClass('text')).toBe(true);
    expect(wrapper.find('div').at(0).hasClass('formGroup')).toBe(true);
    expect(wrapper.find('div').at(1).hasClass('formGroup')).toBe(true);
    expect(wrapper.find('label').at(0).hasClass('label')).toBe(true);
    expect(wrapper.find('label').at(1).hasClass('label')).toBe(true);
    expect(wrapper.find('input').at(0).hasClass('input')).toBe(true);
    expect(wrapper.find('input').at(1).hasClass('input')).toBe(true);
    expect(wrapper.find('button').hasClass('button')).toBe(true);
  });
});
