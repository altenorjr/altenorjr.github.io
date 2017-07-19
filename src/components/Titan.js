import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withDimensions, { propTypes, atLeast, is } from './hoc/withDimensions';
import { sparkScrollFactory, SparkScroll } from './Spark';

import styles from './Titan.css';

export default sparkScrollFactory(withDimensions(class Titan extends PureComponent {
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
}));