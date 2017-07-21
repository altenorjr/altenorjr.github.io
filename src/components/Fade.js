import React, { PureComponent } from 'react';

export default class Fade extends PureComponent {
    forwardProps = () => {
        const props = Object.assign({}, this.props);

        delete props.opacity;

        return props;
    }
    render = () => (
        <span style={{ opacity: this.props.opacity || 0.6 }} {...this.forwardProps()}></span>
    )
}