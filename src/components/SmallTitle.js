import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './SmallTitle.css'

export default class SmallTitle extends PureComponent {
    static propTypes = {
        lightMode: PropTypes.bool,
        align: PropTypes.oneOf(["left", "center", "right"]),
        margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }

    static defaultProps = {
        align: "left",
        margin: 0
    }

    render = () => {
        const margin = typeof this.props.margin == 'number' ? `${this.props.margin}px` : this.props.margin;

        const titleStyle = Object.assign(this.props.titleStyle || {}, {
            textAlign: `${this.props.align}`,
            margin: margin
        });

        return (
            <h2
                className={
                    classnames(
                        styles.title,
                        this.props.className,
                        this.props.lightMode && styles.lightMode
                    )
                }
                style={titleStyle}>
                {this.props.children}
            </h2>
        );
    }
}