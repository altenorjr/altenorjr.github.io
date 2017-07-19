import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';
import { Fullpage, Slide } from 'fullpage-react';
import Flexbox from 'flexbox-react';

import Over10Years from '../components/Over10Years';
import Highlight from '../components/Highlight';
import DescriptionText from '../components/DescriptionText';

import styles from './About.css';

export default class About extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        setTimeout(() => {
            this.props.setTopBarLightMode(false);
        }, 150);
    }

    onSlideChanged = (name, props, state, newState) => {
        if (window.outerWidth >= 1024) {
            return;
        }

        const isLight = [1].indexOf(newState.activeSlide) !== -1;

        setTimeout(() => this.props.setTopBarLightMode(isLight), 150);
    }

    render = () => (
        <Flexbox
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            padding="50px 0"
            style={{
                boxSizing: "border-box"
            }}>
            <Flexbox
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="75vh">
                <Grid className={styles.slide1}>
                    <Row>
                        <Col xs={12}>
                            <h1 className={styles.title}>About Me</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1} md={4} mdOffset={4} className={styles.subtitle}>
                            <p>Before the commercials, big event booths, national sport competitions, extensive line of products and,</p>

                            <img src='/img/arrow-down.png' className={styles.arrowDown} alt="Scroll Down" />
                        </Col>
                    </Row>
                </Grid>
            </Flexbox>
            <Flexbox
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="75vh"
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0
                }}>
                <div className={styles.slide2}>
                    <img src="/img/eduardo.jpg" alt="About me" />
                    <div>
                        <h2>UI, UX and WebSite Design</h2>
                        <p>Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up</p>
                        <p>Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up</p>
                    </div>
                </div>
            </Flexbox>
            <Flexbox
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="100vh"
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0
                }}>
                <Flexbox
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="flex-end">
                    <Flexbox
                        flexBasis="60%"
                        flexDirection="column"
                        justifyContent="flex-start">
                        <Highlight
                            align="left"
                            line1="About myself"
                            line2="Lorem ipsum sit" />
                        <DescriptionText
                            align="left"
                            margin="30px 0 0 0"
                            size={23}
                            width="100%">
                            Before the commercials, big event booths, national sport competitions, extensive line of products and, ladies and gentlemen, most importantly, before that time Fernando Santo
                        </DescriptionText>
                        <DescriptionText
                            align="left"
                            margin="20px 0 0 0"
                            size={18}
                            width="100%">
                            Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up becoming a multi-channel demigod brand that just happens to be one of the top 5 supp brands in the country. Yeah, no biggie. I was heavily involved throughout the project, occupying different roles for different problems.
                        </DescriptionText>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
            <Flexbox
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="100vh"
                style={{
                    position: 'relative',
                    top: 0,
                    left: 0
                }}>
                <Over10Years />
            </Flexbox>
            {/*
            <Fullpage onSlideChangeStart={this.onSlideChanged} slides={[
                <Slide>
                    <Grid className={styles.slide1}>
                        <Row>
                            <Col xs={12}>
                                <h1 className={styles.title}>About Me</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10} xsOffset={1} md={4} mdOffset={4} className={styles.subtitle}>
                                <p>Before the commercials, big event booths, national sport competitions, extensive line of products and,</p>

                                <img src='/img/arrow-down.png' className={styles.arrowDown} alt="Scroll Down" />
                            </Col>
                        </Row>
                    </Grid>
                </Slide>,
                <Slide>

                </Slide>,
                <Slide>
                    <Over10Years />
                </Slide>
            ]} />
        */}
        </Flexbox>
    )
}