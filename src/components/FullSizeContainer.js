import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import withDimensions, { atLeast, propTypes } from './hoc/withDimensions';

import styles from './FullSizeContainer.css';

export default withDimensions(class FullSizeContainer extends PureComponent {
    static propTypes = {
        bgColor: PropTypes.string,
        bgColorSm: PropTypes.string,
        bgImage: PropTypes.string,
        bgImageSm: PropTypes.string,
        bgSize: PropTypes.string,
        bgSizeSm: PropTypes.string,
        bgPosition: PropTypes.string,
        bgPositionSm: PropTypes.string,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        widthSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        heightSm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        flexDirection: PropTypes.oneOf(["column", "row", "column-revers", "row-revers"]),
        dimensions: propTypes,
        justifyContent: PropTypes.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around"]),
        alignItems: PropTypes.oneOf(["flex-start", "center", "flex-end", "baseline", "stretch"]),
        absolute: PropTypes.bool,
        zIndex: PropTypes.number
    }

    static defaultProps = {
        width: '100vw',
        height: '100vh',
        widthSm: '100vw',
        heightSm: '100vh',
        flexDirection: "column",
        justifyContent: "center",
        absolute: false,
        zIndex: 1,
        alignItems: "center"
    }

    render = () => {
        const style = {
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            position: this.props.absolute ? 'absolute' : 'relative',
            zIndex: this.props.absolute ? this.props.zIndex : 'inherit',
            flexDirection: this.props.flexDirection,
            justifyContent: this.props.justifyContent,
            alignItems: this.props.alignItems
        };

        if (atLeast('lg', this)) {
            Object.assign(style, {
                backgroundColor: this.props.bgColor,
                backgroundImage: this.props.bgImage ? `url(${this.props.bgImage})` : 'none',
                backgroundSize: this.props.bgSize || 'contain',
                backgroundPosition: this.props.bgPosition || 'center center',
                width: this.props.width,
                height: this.props.height
            });
        }
        else {
            Object.assign(style, {
                backgroundColor: this.props.bgColorSm || this.props.bgColor,
                backgroundImage: this.props.bgImageSm === null ? 'none' : (this.props.bgImageSm ? `url(${this.props.bgImageSm})` : this.props.bgImage ? `url(${this.props.bgImage})` : 'none'),
                backgroundSize: this.props.bgSizeSm || this.props.bgSize || 'cover',
                backgroundPosition: this.props.bgPositionSm || this.props.bgPosition || 'center center',
                width: this.props.widthSm,
                height: this.props.heightSm
            });
        }

        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.bgColor;
        delete forwardProps.bgColorSm;
        delete forwardProps.bgImage;
        delete forwardProps.bgImageSm;
        delete forwardProps.bgSize;
        delete forwardProps.bgSizeSm;
        delete forwardProps.bgPosition;
        delete forwardProps.bgPositionSm;
        delete forwardProps.dimensions;
        delete forwardProps.width;
        delete forwardProps.widthSm;
        delete forwardProps.height;
        delete forwardProps.heightSm;
        delete forwardProps.flexDirection;
        delete forwardProps.absolute;
        delete forwardProps.justifyContent;
        delete forwardProps.alignItems;
        delete forwardProps.zIndex;

        return (
            <div style={style} {...forwardProps}>{this.props.children}</div>
        );
    }
})