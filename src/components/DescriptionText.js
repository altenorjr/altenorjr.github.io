import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Flexbox from 'flexbox-react';
import withDimensions, { propTypes, is, atMost } from './hoc/withDimensions';

import styles from './DescriptionText.css'

export default withDimensions(class DescriptionText extends PureComponent {
    static propTypes = {
        flex: PropTypes.string,
        lightMode: PropTypes.bool,
        align: PropTypes.oneOf(["left", "center", "right"]),
        weight: PropTypes.number,
        size: PropTypes.number,
        sizeSm: PropTypes.number,
        unit: PropTypes.oneOf(["px", "%", "em", "pt"]),
        margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        marginSm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        widthSm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),        
        dimensions: propTypes
    }

    static defaultProps = {
        lightMode: false,
        align: "center",
        weight: 100,
        size: 31,
        sizeSm: 16,
        unit: 'px',
        margin: "30px auto",
        marginSm: "20px auto",
        width: "60%",
        widthSm: "90%"
    }

    render = () => {
        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.lightMode;
        delete forwardProps.align;
        delete forwardProps.weight;
        delete forwardProps.size;
        delete forwardProps.sizeSm;
        delete forwardProps.unit;
        delete forwardProps.margin;
        delete forwardProps.marginSm;
        delete forwardProps.width;
        delete forwardProps.widthSm;        
        delete forwardProps.dimensions;
        delete forwardProps.flex;
        delete forwardProps.className;

        const marginSm = typeof this.props.marginSm === 'number' ? `${this.props.marginSm}${this.props.unit}` : this.props.marginSm;

        let style = {
            fontWeight: this.props.weight,
            margin: this.props.margin,
            textAlign: this.props.align,
            fontSize: `${this.props[`size${is('sm', this) ? 'Sm' : ''}`]}${this.props.unit}`,
            width: `${this.props[`width${is('sm', this) ? 'Sm' : ''}`]}`,
            color: this.props.lightMode ? "#FFF" : "#000",
            flex: this.props.flex
        };

        if (is('sm', this)) {
            style = Object.assign(style, {
                fontSize: this.props.sizeSm,
                margin: marginSm
            });
        }

        return (
            <div className={cx(styles.text, this.props.className)} style={style} {...forwardProps}>
                {this.props.children}
            </div>
        )
    };
});
