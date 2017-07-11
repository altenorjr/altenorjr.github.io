import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Fullpage, Slide } from 'fullpage-react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import WorkCase from '../components/WorkCase';
import Over10Years from '../components/Over10Years';
import Contact from './Contact';

import styles from './Work.css';

class Work extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    onSlideChanged = (name, props, state, newState) => {
        if (window.outerWidth >= 1024) {
            return;
        }

        setTimeout(() => this.props.setTopBarLightMode(!!this.workCases()[newState.activeSlide].light), 150);
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        setTimeout(() => this.props.setTopBarLightMode(false), 150);
    }

    render = () => {
        const lang = this.props.location.pathname.split('/')[1];

        const slides = this.workCases().slice(1, 5).map((item) => <Slide><WorkCase {...item} /></Slide>);

        slides.unshift(
            <Slide>
                <Grid className={styles.slide1}>
                    <Row>
                        <Col xs={12}>
                            <h1 className={styles.title}>Work Cases</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1} md={4} mdOffset={4} className={styles.subtitle}>
                            <p>Before the commercials, big event booths, national sport competitions, extensive line of products and, ladies and gentlemen, most importantly, before that time Fernando Santo Forte beat the polish Karol Bedorf with a technical K.O. and became the KSW champion under the brand’s team of sponsored atheletes... Before all of those huge things, there was the task of designing the logo.</p>

                            <img src='/img/arrow-down.png' className={styles.arrowDown} alt="Scroll Down" />
                        </Col>
                    </Row>
                </Grid>
            </Slide>
        );

        slides.push(
            <Slide>
                <Over10Years />
            </Slide>
        );

        return (
            <div>
                <Fullpage slides={slides} onSlideChangeStart={this.onSlideChanged} />
            </div>
        );
    }

    workCases = () => {
        return [
            {},
            {
                img: "/img/1-iridium.png",
                link: "iridium",
                bgColor: "#FBFD03",
                bgPositionLg: "center bottom",
                bgPositionSm: "25px 100px",
                bgSizeSm: "100%",
                range: "2015 - 2017",
                type: "UX/Branding",
                title: "Made with Iridium",
                desc: "Iridium Labs is a new and uprising supplement brand based in Sao Paulo, Brazil. I was involved in its birth, coming up with product websites, app prototypes and marketing",
                light: false
            },
            {
                img: "/img/2-app-gallore.png",
                link: "app-gallore",
                bgColor: "#1155D3",
                bgPositionLg: "center center",
                bgPositionSm: "20px 35px",
                bgSizeSm: "contain",
                range: "2011 - 2014",
                type: "UI/UX",
                title: "App Gallore",
                desc: "DreamWalk is a Melbourne-based app development company. I had a blast being their lead UI designer for a year or so back in 2011. After that, we still managed to work together on a few killer apps. Oh, the memories!",
                light: true
            },
            {
                img: "/img/3-everman.png",
                link: "everman",
                bgColor: "#37404D",
                bgPositionLg: "center center",
                bgPositionSm: "center center",
                bgSizeSm: "contain",
                range: "2017",
                type: "Branding",
                title: "Everman",
                desc: "DreamWalk is a Melbourne-based app development company. I had a blast being their lead UI designer for a year or so back in 2011. After that, we still managed to work together on a few killer apps. Oh, the memories!",
                light: true
            },
            {
                img: "/img/4-alphanation.png",
                link: "alphanation",
                bgColor: "#DD0014",
                bgPositionLg: "center center",
                bgPositionSm: "-270px center",
                bgSizeSm: "cover",
                range: "2017",
                type: "UI/UX",
                title: "Alphanation",
                desc: "DreamWalk is a Melbourne-based app development company. I had a blast being their lead UI designer for a year or so back in 2011. After that, we still managed to work together on a few killer apps. Oh, the memories!",
                light: true
            },
            {}
        ];

    }
}

export default withRouter(Work);