import React, { PureComponent } from 'react';

export default class Fade extends PureComponent {
    render = () => (
        <span style={{ opacity: this.props.opacity || 0.6 }} {...this.props}></span>
    )
}