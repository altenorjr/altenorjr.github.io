import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';
import { Fullpage, Slide } from 'fullpage-react';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';

import styles from './Iridium.css';

import withDimensions, { width, height, atLeast, scrollTo } from '../components/hoc/withDimensions';

import Iridium1 from '../components/iridium/Iridium1';
import Iridium2 from '../components/iridium/Iridium2';
import Iridium3 from '../components/iridium/Iridium3';
import Iridium4 from '../components/iridium/Iridium4';
import Iridium5 from '../components/iridium/Iridium5';
import Iridium6 from '../components/iridium/Iridium6';
import Iridium7 from '../components/iridium/Iridium7';
import Iridium8 from '../components/iridium/Iridium8';
import Iridium9 from '../components/iridium/Iridium9';
import Iridium10 from '../components/iridium/Iridium10';
import Ending from '../components/Ending';

export default withDimensions(class Iridium extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        setTimeout(() => {
            this.props.setTopBarLightMode(false);
        }, 150);
    }

    lightEnabledSlidesLg = [3, 6, 8]
    lightEnabledSlidesSm = [1, 6]

    onSlideChanged = (name, props, state, newState) => {
        const { activeSlide } = newState;

        const lightEnabledSlides = window.outerWidth >= 1024 ? this.lightEnabledSlidesLg : this.lightEnabledSlidesSm;

        const isLight = lightEnabledSlides.indexOf(newState.activeSlide) !== -1;

        setTimeout(() => this.props.setTopBarLightMode(isLight), 150);
    }

    componentWillUnmount = () => window.scrollTo(0, 0);

    render = () => (
        <Flexbox flexDirection="column">
            <Iridium1
                ref="i1"
                /*timeline={{
                    'bottomBottom+100': {
                        onDown: (o) => {
                            scrollTo(this.refs.i2);
                            // this.props.setTopBarLightMode(true);
                        }
                    }
                }} */ />
            <Iridium2
                ref="i2"
                /*timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.i1);
                            // this.props.setTopBarLightMode(true);
                        }
                    }
                }} */ />
            <Iridium3
                ref="i3"
                /*timeline={{
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.i4);
                            this.props.setTopBarLightMode(true);
                        }
                    }
                }} */ />
            <Iridium4
                ref="i4"
                setTopBarLightMode={this.props.setTopBarLightMode}
                /*timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.i3);
                            this.props.setTopBarLightMode(false);
                        }
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.i5);
                            this.props.setTopBarLightMode(false);
                        }
                    }
                }} */ />
            <Iridium5
                ref="i5" 
                /*timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.i4);
                            this.props.setTopBarLightMode(false);
                        }
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.i6);
                            this.props.setTopBarLightMode(false);
                        }
                    }
                }} */ />
            <Iridium6
                ref="i6"
                /*timeline={{
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.i7);
                            this.props.setTopBarLightMode(true);
                        }
                    }
                }} */ />
            <Iridium7 
                ref="i7" 
                /*timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.i6);
                            this.props.setTopBarLightMode(false);
                        }
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.i8);
                            this.props.setTopBarLightMode(false);
                        }
                    }
                }} */ />
            <Iridium8 
                ref="i8" 
                /*timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.i7);
                            this.props.setTopBarLightMode(true);
                        }
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.i9);
                            this.props.setTopBarLightMode(true);
                        }
                    }
                }} */ />
            <Iridium9 
                ref="i9" 
                /*timeline={{
                    'topTop-100': {
                        onUp: () => {
                            scrollTo(this.refs.i8);
                            this.props.setTopBarLightMode(false);
                        }
                    },
                    'bottomBottom+100': {
                        onDown: () => {
                            scrollTo(this.refs.i10);
                            this.props.setTopBarLightMode(false);
                        }
                    }
                }} */ />
            <Iridium10 ref="i10" />
            <Ending />
            {/*
        <div className={styles.fullpage}>
            <Fullpage onSlideChangeStart={this.onSlideChanged} slides={[
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>,
                <Slide>
                </Slide>
            ]} />
        </div>
        */}
        </Flexbox>
    )
})