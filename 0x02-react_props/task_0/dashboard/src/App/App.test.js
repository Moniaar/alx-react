import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders Login screen when isLoggedIn is false', () => {
        const { getByText } = render(<App isLoggedIn={false} />);
        const loginElement = getByText(/login/i);
        expect(loginElement).toBeInTheDocument();
    });

    describe('when isLoggedIn is true', () => {
        test('does not render Login screen', () => {
            const { queryByText } = render(<App isLoggedIn={true} />);
            const loginElement = queryByText(/login/i);
            expect(loginElement).not.toBeInTheDocument();
        });

        test('renders CourseList screen', () => {
            const { getByText } = render(<App isLoggedIn={true} />);
            const courseListElement = getByText(/available courses/i);
            expect(courseListElement).toBeInTheDocument();
        });
    });
});
