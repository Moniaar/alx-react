// Footer/Footer.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Footer, { mapStateToProps } from './Footer';
import { fromJS } from 'immutable';

describe('Footer Component', () => {
  it('should render correctly when user is logged in', () => {
    const props = {
      user: fromJS({ username: 'admin' }),
    };
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper.find('p').text()).toBe('Logged in as: admin');
  });

  it('should render correctly when user is not logged in', () => {
    const props = {
      user: null,
    };
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper.find('p').text()).toBe('You are not logged in');
  });

  it('mapStateToProps should map the state to props correctly', () => {
    const state = fromJS({
      user: { username: 'admin' },
    });
    const expectedProps = {
      user: { username: 'admin' },
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
