import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseListRow Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="Test" />);
  });

  it('renders a default row correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.find('tr').hasClass('defaultRow')).toBe(true);
  });

  it('renders a header row correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Header" isHeader={true} />);
    expect(wrapper.find('tr').hasClass('headerRow')).toBe(true);
  });

  it('renders header cells correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Header 1" textSecondCell="Header 2" isHeader={true} />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).hasClass('headerCell')).toBe(true);
    expect(wrapper.find('th').at(1).hasClass('headerCell')).toBe(true);
  });

  it('renders default cells correctly', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).hasClass('defaultCell')).toBe(true);
    expect(wrapper.find('td').at(1).hasClass('defaultCell')).toBe(true);
  });
});
