import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withDimensions, { propTypes, is } from './hoc/withDimensions';

export default withDimensions(class HorizontalCenter extends PureComponent {
    static propTypes = {
        width: PropTypes.number.isRequired,
        widthSm: PropTypes.number.isRequired,
        unit: PropTypes.string,
        absolute: PropTypes.bool,
        dimensions: propTypes
    }

    static defaultProps = {
        unit: 'px',
        absolute: false
    }

    render = () => {
        const styleObj = {
            width: `${this.props[`width${is('sm', this) ? 'Sm' : ''}`]}${this.props.unit}`,
            position: 'absolute',
            left: '50%',
            marginLeft: `-${this.props[`width${is('sm', this) ? 'Sm' : ''}`] / 2}${this.props.unit}`
        };

        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.width;
        delete forwardProps.widthSm;
        delete forwardProps.unit;
        delete forwardProps.unitSm;
        delete forwardProps.absolute;
        delete forwardProps.dimensions;

        return (
            <div style={styleObj} {...forwardProps}>
                {this.props.children}
            </div>
        )
    }
});