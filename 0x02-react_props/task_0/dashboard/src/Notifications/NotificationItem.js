import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ html, type = 'default', value }) => {
    return (
        <div className={`notification ${type}`}>
            <p dangerouslySetInnerHTML={html} />
            {value}
        </div>
    );
};

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default NotificationItem;
