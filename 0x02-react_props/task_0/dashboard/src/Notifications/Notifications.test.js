import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
    test('renders correctly if listNotifications is empty or not provided', () => {
        const { queryByText } = render(<Notifications />);
        expect(queryByText(/no new notification for now/i)).toBeInTheDocument();
    });

    test('renders list of notifications correctly when listNotifications is provided', () => {
        const notifications = [
            { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'Notification 1' },
            { id: 2, html: { __html: 'Notification 2' }, type: 'urgent', value: 'Notification 2' },
        ];
        const { getByText } = render(<Notifications listNotifications={notifications} />);
        expect(getByText(/Notification 1/i)).toBeInTheDocument();
        expect(getByText(/Notification 2/i)).toBeInTheDocument();
    });

    test('does not display "Here is the list of notifications" when listNotifications is empty', () => {
        const { queryByText } = render(<Notifications />);
        expect(queryByText(/here is the list of notifications/i)).not.toBeInTheDocument();
    });
});

