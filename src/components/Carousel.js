import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ViewPager, Frame, Track, View } from 'react-view-pager';

export default class Carousel extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        viewsToShow: PropTypes.number,
        align: PropTypes.number,
        infinite: PropTypes.bool,
        margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }

    static defaultProps = {
        viewsToShow: 1.5,
        align: 0.75,
        infinite: true,
        margin: 0
    }

    render = () => {
        const forwardProps = Object.assign({}, this.props);

        delete forwardProps.className;
        delete forwardProps.margin;
        delete forwardProps.style;

        const margin = typeof this.props.margin === 'number' ? `${this.props.margin}px` : this.props.margin;

        const styleObj = Object.assign({
            width: '100%',
            marginTop: margin
        }, this.props.style || {});

        return (
            <ViewPager
                className={this.props.className}
                style={styleObj}>
                <Frame>
                    <Track {...forwardProps}>
                        {this.props.children.map((item, i) => <View key={i}>{item}</View>)}
                    </Track>
                </Frame>
            </ViewPager>
        );
    }
}