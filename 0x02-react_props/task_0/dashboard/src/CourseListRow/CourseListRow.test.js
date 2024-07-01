import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
    test('renders one cell with colspan=2 when textSecondCell does not exist', () => {
        const { container } = render(<CourseListRow isHeader textFirstCell="Header" />);
        const th = container.querySelector('th');
        expect(th.colSpan).toBe(2);
    });

    test('renders two cells when textSecondCell is present', () => {
        const { container } = render(<CourseListRow isHeader textFirstCell="Header" textSecondCell="Subheader" />);
        const th = container.querySelectorAll('th');
        expect(th.length).toBe(2);
    });

    test('renders correctly two td elements within a tr element', () => {
        const { container } = render(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
        const tr = container.querySelector('tr');
        const td = tr.querySelectorAll('td');
        expect(td.length).toBe(2);
    });
});

