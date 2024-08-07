// App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Map } from 'immutable';

describe('App Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call fetchNotifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<App fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});

