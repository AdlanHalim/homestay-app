import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className = '', variant = 'surface', ...props }) => {
    const baseClass = variant === 'variant' ? 'surface-variant-card' : 'surface-card';
    return (
        <div className={`${baseClass} ${className}`} {...props}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['surface', 'variant']),
};

export default Card;
