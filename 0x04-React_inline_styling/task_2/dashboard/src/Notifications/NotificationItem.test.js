import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('NotificationItem Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct HTML when passed type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toEqual('test');
  });

  it('renders the correct HTML when passed a html prop', () => {
    const html = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={html} />);
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });

  it('applies correct styles for default notification type', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('className')).toContain('default');
  });

  it('applies correct styles for urgent notification type', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test" />);
    expect(wrapper.find('li').prop('className')).toContain('urgent');
  });

  it('calls markAsRead with correct ID when clicked', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" markAsRead={markAsReadMock} />);
    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });
});
