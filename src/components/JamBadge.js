import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './JamBadge.css'

export default class JamBadge extends PureComponent {
    static propTypes = {
        lightMode: PropTypes.bool,
        align: PropTypes.oneOf(["left", "center", "right"]),
        fixed: PropTypes.bool
    }

    static defaultProps = {
        align: 'center',
        fixed: true
    }

    render = () => {
        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.lightMode;
        delete forwardProps.className;
        delete forwardProps.align;
        delete forwardProps.fixed;

        return (
            <h2 
                className={
                    classnames(
                        styles.badge, 
                        this.props.className, 
                        this.props.lightMode && styles.lightMode,
                        this.props.fixed && styles.fixed
                    )
                }
                style={{
                    textAlign: this.props.align
                }}
                {...forwardProps}
            >
                #1 Music App Wordwide
            </h2>
        );
    }
}
