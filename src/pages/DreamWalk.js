import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';
import { Fullpage, Slide } from 'fullpage-react';
import Flexbox from 'flexbox-react';
import classnames from 'classnames';

import withDimensions, { width, height, atLeast, scrollTo } from '../components/hoc/withDimensions';

import styles from './DreamWalk.css';

import DreamWalk1 from '../components/dreamWalk/DreamWalk1';
import DreamWalk2 from '../components/dreamWalk/DreamWalk2';
import DreamWalk3 from '../components/dreamWalk/DreamWalk3';
import DreamWalk4 from '../components/dreamWalk/DreamWalk4';
import DreamWalk5 from '../components/dreamWalk/DreamWalk5';
import DreamWalk6 from '../components/dreamWalk/DreamWalk6';
import DreamWalk7 from '../components/dreamWalk/DreamWalk7';
import DreamWalk8 from '../components/dreamWalk/DreamWalk8';
import DreamWalk9 from '../components/dreamWalk/DreamWalk9';
import DreamWalk10 from '../components/dreamWalk/DreamWalk10';

export default withDimensions(class DreamWalk extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        this.setTopBarLightMode(true);
    }

    lightEnabledSlidesSm = [0, 1, 7]

    lightEnabledSlidesLg = [0, 1, 7]

    onSlideChanged = (name, props, state, newState) => {
        const { activeSlide } = newState;

        if (this.videoPlayer) {
            try {
                if (activeSlide == 1) {
                    this.videoPlayer.setVolume(0);
                    this.videoPlayer.playVideo();
                }
                else {
                    this.videoPlayer.pauseVideo();
                }
            }
            catch (e) { }
        }

        const lightEnabledSlides = window.outerWidth >= 1024 ? this.lightEnabledSlidesLg : this.lightEnabledSlidesSm;

        const isLight = lightEnabledSlides.indexOf(newState.activeSlide) !== -1;

        this.setTopBarLightMode(isLight);
    }

    setTopBarLightMode = (mode) => this.props.setTopBarLightMode(mode);

    render = () => (
        <Flexbox flexDirection="column">
            <DreamWalk1
                ref="d1"
                timeline={{
                    'bottomBottom+100': {
                        onDown: (o) => {
                            scrollTo(this.refs.d2);
                            this.props.setTopBarLightMode(true);
                        }
                    }
                }} />
            <DreamWalk2
                ref="d2"
                setTopBarLightMode={this.props.setTopBarLightMode}
                timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.d1);
                            this.props.setTopBarLightMode(true);
                        }
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.d4);
                            this.props.setTopBarLightMode(false);
                        }
                    }
                }} />
            <DreamWalk4
                ref="d4"
                timeline={{
                    'topTop-100': {
                        onUp: () => scrollTo(this.refs.d2)
                    },
                    'bottomBottom+100': {
                        onDown: () => scrollTo(this.refs.d6)
                    }
                }} />
            <DreamWalk6
                ref="d6"
                timeline={{
                    'topTop-100': {
                        onUp: () => scrollTo(this.refs.d4)
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.d8);
                            this.props.setTopBarLightMode(true);
                        }
                    }
                }} />
            <DreamWalk8
                ref="d8"
                timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.d6);
                            this.props.setTopBarLightMode(false);
                        }
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.d9);
                            this.props.setTopBarLightMode(false);
                        }
                    }
                }} />
            <DreamWalk9
                ref="d9"
                timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.d8);
                            this.props.setTopBarLightMode(true);
                        }
                    },
                    'topTop+100': {
                        onDown: () => scrollTo(this.refs.d10, atLeast('md', this) ? 3000 : 1000)
                    }
                }} />
            <DreamWalk10 
                ref="d10" 
                timeline={{
                    'topTop-1': {
                        onUp: () => scrollTo(this.refs.d9, atLeast('md', this) ? 3000 : 1000)
                    }
                }}/>
        </Flexbox>
    )
})