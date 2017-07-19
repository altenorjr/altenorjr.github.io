import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class VerticalAlign extends PureComponent {
    static propTypes = {
        position: PropTypes.oneOf(["top", "middle", "bottom"]),
        offset: PropTypes.number,
        height: PropTypes.number.isRequired,
        unit: PropTypes.string
    }

    static defaultProps = {
        position: "middle",
        offset: 0,
        unit: 'px'
    }

    verticalAnchor = () => this.props.position !== 'bottom' ? 'top' : 'bottom';

    verticalPosition = () => this.props.position === 'middle' ? '50%' : 0 + this.props.offset;

    marginTop = () => this.props.position === 'middle' ? `-${(this.props.height / 2) + this.props.offset}${this.props.unit}` : 0;

    render = () => (
        <div style={{
            width: '100%',
            height: `${this.props.height}${this.props.unit}`,
            position: 'absolute',
            [this.verticalAnchor()]: this.verticalPosition(),
            marginTop: this.marginTop()
        }}>
            {this.props.children}
        </div>
    )
}