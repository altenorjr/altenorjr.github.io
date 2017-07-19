import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import cx from 'classnames';

import withDimensions, { propTypes, is } from './hoc/withDimensions';

import styles from './Highlight.css'

export default withDimensions(class Highlight extends PureComponent {
    static propTypes = {
        line1: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        line2: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        lightMode: PropTypes.bool,
        align: PropTypes.string,
        margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        invert: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        sizeSm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        flex: PropTypes.string,
        dimensions: propTypes
    }

    static defaultProps = {
        lightMode: false,
        invert: false,
        align: "center",
        margin: 0,
        size: '56px',
        sizeSm: '28px'
    }

    wrap = (node, wrap) => wrap ? <strong>{node}</strong> : node;

    render = () => {
        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.line1;
        delete forwardProps.line2;
        delete forwardProps.invert;
        delete forwardProps.align;
        delete forwardProps.lightMode;
        delete forwardProps.className;
        delete forwardProps.margin;
        delete forwardProps.size;
        delete forwardProps.sizeSm;
        delete forwardProps.dimensions;
        delete forwardProps.flex;

        const style = {
            textAlign: this.props.align,
            margin: this.props.margin,
            flex: this.props.flex,
            fontSize: this.props[`size${is('sm', this) ? 'Sm' : ''}`]
        };

        return (
            <h2 style={style} className={cx(styles.highlight, this.props.className, this.props.lightMode && styles.whiteFont)} {...forwardProps}>
                {this.wrap(this.props.line1, !this.props.invert)}<br />
                {this.wrap(this.props.line2, this.props.invert)}
            </h2>
        )
    };
});