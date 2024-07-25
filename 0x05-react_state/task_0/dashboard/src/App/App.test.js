import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('verifies that the default state for displayDrawer is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('verifies that after calling handleHideDrawer, the state is updated to be false', () => {
    wrapper.instance().handleDisplayDrawer(); // Set it to true first
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
});
