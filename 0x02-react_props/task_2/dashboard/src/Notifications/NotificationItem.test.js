import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

// Configure Enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct html with dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.contains(<li data-notification-type="default">test</li>)).toBe(true);
  });

  it('renders the correct html with dummy html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});

