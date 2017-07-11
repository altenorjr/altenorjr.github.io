import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';
import { Fullpage, Slide } from 'fullpage-react';

import Over10Years from '../components/Over10Years';

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
                <div className={styles.slide2}>
                    <img src="/img/eduardo.jpg" alt="About me" />
                    <div>
                        <h2>UI, UX and WebSite Design</h2>
                        <p>Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up</p>
                        <p>Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up</p>
                    </div>
                </div>
            </Slide>,
            <Slide>
                <Over10Years />
            </Slide>
        ]} />
    )
}