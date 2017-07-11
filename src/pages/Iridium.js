import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';
import { Fullpage, Slide } from 'fullpage-react';

import styles from './Iridium.css';

export default class Iridium extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        setTimeout(() => {
            this.props.setTopBarLightMode(false);
        }, 150);
    }

    lightEnabledSlides = [1]

    onSlideChanged = (name, props, state, newState) => {
        if (window.outerWidth >= 1024) {
            return;
        }

        const isLight = this.lightEnabledSlides.indexOf(newState.activeSlide) !== -1;

        setTimeout(() => this.props.setTopBarLightMode(isLight), 150);
    }

    render = () => (
        <Fullpage onSlideChangeStart={this.onSlideChanged} slides={[
            <Slide>
                
            </Slide>
        ]} />
    )
}