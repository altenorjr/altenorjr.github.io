import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Fullpage, Slide } from 'fullpage-react';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import Flexbox from 'flexbox-react';

import { sparkScrollFactory } from '../components/Spark';
import withDimensions, { height, scrollTo } from '../components/hoc/withDimensions';
import DescriptionText from '../components/DescriptionText';
import WorkCase from '../components/WorkCase';
import Over10Years from '../components/Over10Years';
import Contact from './Contact';

import styles from './Work.css';

const SCFlexbox = sparkScrollFactory(Flexbox);

export default withRouter(withDimensions(class Work extends PureComponent {
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

        // const slides = this.workCases().slice(1, 5).map((item) => <Slide><WorkCase {...item} /></Slide>);

        // slides.push(
        //     <Slide>
        //         <Over10Years />
        //     </Slide>
        // );

        return (
            <div>
                <SCFlexbox
                    ref="w0"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    height="100vh"
                    timeline={{
                        'bottomBottom+100': {
                            onDown: () => scrollTo(height(this))
                        }
                    }}>
                    <h1 className={styles.title}>Work Cases</h1>
                    <DescriptionText className={styles.subtitle}>
                        Before the commercials, big event booths, national sport competitions, extensive line of products and
                    </DescriptionText>
                    <img src='/img/arrow-down.png' className={styles.arrowDown} alt="Scroll Down" />
                </SCFlexbox>
                {
                    this.workCases.map((props, i) => <WorkCase key={i} {...props}/>)
                }
            </div>

        );
    }

    workCases = [{
        i: 1,
        img: "/img/1-iridium.png",
        id: "iridium",
        link: "iridium",
        bgColor: "#FBFD03",
        bgPositionLg: "center center",
        bgPositionSm: "25px 100px",
        bgSize: "100%",
        bgSizeSm: "100%",
        range: "2015 - 2017",
        type: "UX/Branding",
        title: "Made with Iridium",
        desc: "Iridium Labs is a new and uprising supplement brand based in Sao Paulo, Brazil. I was involved in its birth, coming up with product websites, app prototypes and marketing",
        light: false
    },
    {
        i: 2,
        img: "/img/2-app-gallore.png",
        id: "app-gallore",
        link: "dreamwalk",
        bgColor: "#1155D3",
        bgPositionLg: "center center",
        bgPositionSm: "20px 35px",
        bgSize: "90%",
        bgSizeSm: "contain",
        range: "2011 - 2014",
        type: "UI/UX",
        title: "App Gallore",
        desc: "DreamWalk is a Melbourne-based app development company. I had a blast being their lead UI designer for a year or so back in 2011. After that, we still managed to work together on a few killer apps. Oh, the memories!",
        light: true
    },
    {
        i: 3,
        img: "/img/3-everman.png",
        id: "everman",
        link: null,
        bgColor: "#37404D",
        bgPositionLg: "center center",
        bgPositionSm: "center center",
        bgSize: "90%",
        bgSizeSm: "contain",
        range: "2017",
        type: "Branding",
        title: "Everman",
        desc: "DreamWalk is a Melbourne-based app development company. I had a blast being their lead UI designer for a year or so back in 2011. After that, we still managed to work together on a few killer apps. Oh, the memories!",
        light: true
    },
    {
        i: 4,
        img: "/img/4-alphanation.png",
        id: "alphanation",
        link: null,
        bgColor: "#DD0014",
        bgPositionLg: "center center",
        bgPositionSm: "-270px center",
        bgSize: "cover",
        bgSizeSm: "cover",
        range: "2017",
        type: "UI/UX",
        title: "Alphanation",
        desc: "DreamWalk is a Melbourne-based app development company. I had a blast being their lead UI designer for a year or so back in 2011. After that, we still managed to work together on a few killer apps. Oh, the memories!",
        light: true
    }]
}));