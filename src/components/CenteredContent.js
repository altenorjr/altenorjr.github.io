import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import withDimensions, { atLeast } from './hoc/withDimensions';

export default withDimensions(class CenteredContent extends PureComponent {
    static propTypes = {
        width: PropTypes.number.isRequired,
        widthSm: PropTypes.number,
        widthUnit: PropTypes.string,
        offsetH: PropTypes.number,
        offsetHSm: PropTypes.number,
        offsetV: PropTypes.number,
        offsetVSm: PropTypes.number,
        height: PropTypes.number.isRequired,
        heightSm: PropTypes.number,
        heightUnit: PropTypes.string,
        style: PropTypes.object,
        styleSm: PropTypes.object,
        dimensions: PropTypes.object
    }

    static defaultProps = {
        widthUnit: 'px',
        heightUnit: 'px'
    }

    render = () => {
        const { width, height, mode, portrait } = this.props.dimensions;

        let styleObj = Object.assign({
            width: `${this.props.width}${this.props.widthUnit}`,
            height: `${this.props.height}${this.props.heightUnit}`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: `-${this.props.height / 2}${this.props.heightUnit}`,
            marginLeft: `-${this.props.width / 2}${this.props.widthUnit}`
        }, this.props.style);

        if (atLeast('lg', this)) {
            styleObj = Object.assign(styleObj, {
                width: `${this.props.widthSm || this.props.width}${this.props.widthUnit}`,
                height: `${this.props.heightSm || this.props.height}${this.props.heightUnit}`,
                marginLeft: `-${(this.props.widthSm || this.props.width) / 2}${this.props.widthUnit}`,
                marginTop: `-${(this.props.heightSm || this.props.height) / 2}${this.props.heightUnit}`
            }, this.props.styleSm);
        }

        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.width;
        delete forwardProps.widthSm;
        delete forwardProps.widthUnit;
        delete forwardProps.height;
        delete forwardProps.heightSm;
        delete forwardProps.heightUnit;
        delete forwardProps.style;
        delete forwardProps.styleSm;
        delete forwardProps.offsetH;
        delete forwardProps.offsetHSm
        delete forwardProps.offsetV;
        delete forwardProps.offsetVSm;
        delete forwardProps.dimensions;

        return (
            <div style={styleObj} {...forwardProps}>
                {this.props.children}
            </div>
        )
    };
})