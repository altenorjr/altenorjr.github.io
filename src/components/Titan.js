import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withDimensions, { propTypes } from './hoc/withDimensions';

import styles from './Titan.css';

@withDimensions
export default class Titan extends PureComponent {
    static propTypes = {
        bgColor: PropTypes.string.isRequired,
        color: PropTypes.string,
        lightMode: PropTypes.bool,
        dimensions: propTypes
    }

    static defaultProps = {
        color: '#FFF',
        lightMode: false
    }

    render = () => (
        <h1
            className={styles.titan}
            style={{
                backgroundColor: this.props.bgColor,
                color: this.props.color
            }}>
            <span>
                {this.props.children}
            </span>
        </h1>
    )
}