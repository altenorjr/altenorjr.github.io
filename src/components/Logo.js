import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Logo.css'

export default class Logo extends PureComponent {
    static propTypes = {
        src: PropTypes.string.isRequired,
        align: PropTypes.oneOf(["left", "center", "right"]),
        small: PropTypes.bool
    }

    static defaultProps = {
        align: 'center'
    }

    render = () => {
        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.src;
        delete forwardProps.align;
        delete forwardProps.className;
        delete forwardProps.small;

        return (
            <div style={{
                textAlign: this.props.align
            }}>
                <img className={classnames(styles.img, this.props.small && styles.small, this.props.className)} src={this.props.src} alt={this.props.alt || ''} {...forwardProps} />
            </div>
        );
    }
}
