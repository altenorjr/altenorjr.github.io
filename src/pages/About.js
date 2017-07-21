import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Ending from '../components/Ending';
import Highlight from '../components/Highlight';
import withDimensions, { atMost } from '../components/hoc/withDimensions';
import DescriptionText from '../components/DescriptionText';
import Title from '../components/Title';

import { StyleSheet } from 'react-look';

@withDimensions
@withRouter
export default class About extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        this.props.setTopBarLightMode(false);
    }

    componentWillUnmount = () => window.scrollTo(0, 0);

    onSlideChanged = (name, props, state, newState) => {
        if (window.outerWidth >= 1024) {
            return;
        }

        const isLight = [1].indexOf(newState.activeSlide) !== -1;

        setTimeout(() => this.props.setTopBarLightMode(isLight), 150);
    }

    lang = () => (this.props.location.pathname.split('/')[1])

    render = () => (
        <div className={styles.main}>
            <div className={styles.cover}>
                <Title mode="big">About Me</Title>
                <DescriptionText>
                    Before the commercials, big event booths, national sport competitions, extensive line of products and,
                </DescriptionText>
                <img src='/img/arrow-down.png' alt="Scroll Down" />
            </div>
            <div className={styles.pictureFrameHolder}>
                <div className={styles.pictureFrame}>
                    <div className={styles.pictureHolder}>
                        <img className={styles.picture} src="/img/eduardo.jpg" alt="About me" />
                    </div>
                    <div className={styles.pictureFrameContent}>
                        <Title className={styles.title}>
                            UI, UX and WebSite Design
                        </Title>
                        <DescriptionText
                            align="left"
                            margin="30px 0 0 0"
                            size={20}
                            width={atMost('md', this) ? "100%" : "80%"}>
                            <p className={styles.singleMargin}>Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up</p>
                            <p className={styles.singleMargin}>Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up</p>
                        </DescriptionText>
                    </div>
                </div>
                <div className={styles.learnMore}>
                    <div className={styles.learnMoreAligner}>
                        <div className={styles.learnMoreContent}>
                            <Highlight
                                align="left"
                                margin="0 0 0 15px"
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
                        </div>
                        <div className={styles.learnMoreAside}>
                            <Title mode="small">#1 Music App Worldwide</Title>
                            <ul className={styles.learnMoreAsideList}>
                                <li>Fitness</li>
                                <li>Education</li>
                                <li>Pharmaceutical</li>
                                <li className={styles.highlight}>E-Commerce</li>
                                <li>E-Commerce</li>
                                <li>Print Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.horizontalStripe}>
                <div className={styles.venicePic}>
                </div>
                <div className={styles.trophyHolder}>
                    <img className={styles.trophy} alt="" src="/img/about-trophy.png" />
                    <div className={styles.trophyText}>
                        <Highlight
                            className={styles.trophyTitle}
                            line1="Excelenge"
                            line2="Recognition"
                            size={50}
                            align="left" />
                        <DescriptionText
                            align="left"
                            size={23}
                            width="90%"
                            margin="50px 0 0 0">
                            Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up
                        </DescriptionText>
                    </div>
                </div>
                <div className={styles.spotifyHolder}>
                    <Title mode="small">Spotify Jams</Title>
                    <Title mode="small" margin="10px 0 0 0" align="center" className={styles.spotifyTitle}>Time to Groove</Title>
                    <img alt="" className={styles.spotifyPlugin} src="/img/about-spotify-placeholder.png" />
                </div>
            </div>
            <div className={styles.end}>
                <Ending
                contactLinkText="Let's Talk."
                link="/work"
                linkText="Or browse through a few of my work cases"
            >
                    Over 10 years of experience.
                </Ending>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    singleMargin: {
        margin: "0 0 20px 0"
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '100vw',
        boxSizing: "border-box",
        padding: "50px 0 0 0"
    },
    cover: {
        display: 'flex',
        flexDirection: 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '100vw',
        'height': '100vh'
    },
    pictureFrameHolder: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        padding: "100px 0",
        alignItems: "center",
        background: "#FFF",
        "@media (max-width: 768px)": {
            padding: 0
        }
    },
    pictureFrame: {
        display: 'flex',
        width: '100vw',
        alignItems: "center",
        background: "#E5E5E5",
        "@media (max-width: 768px)": {
            flexDirection: "column"
        }
    },
    pictureHolder: {
        flex: "1 1 55%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        "@media (max-width: 768px)": {
            flex: "0 0 auto"
        }
    },
    picture: {
        height: "390px",
        position: "relative",
        top: "-40px",
        left: 0,
        "@media (max-width: 768px)": {
            position: 'static'
        }
    },
    title: {
        width: "100%",
        "@media (max-width: 768px)": {
            width: "90%",
            margin: "20px auto 0 auto !important"
        }
    },
    pictureFrameContent: {
        flex: "1 1 45%",
        paddingLeft: "30px",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 768px)": {
            flex: "1 1 auto",
            width: "100%",
            paddingLeft: 0
        }
    },
    learnMore: {
        width: "100vw",
        height: "80vh",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 768px)": {
            height: "auto",
            padding: "50px 0 50px 0"
        }
    },
    learnMoreAligner: {
        width: '80vw',
        display: "flex",
        alignItems: "flex-end",
        "@media (max-width: 768px)": {
            width: "100vw",
            flexDirection: "column",
            alignItems: "flex-start"
        }
    },
    learnMoreContent: {
        flex: "1 1 80%",
        paddingRight: "50px",
        "@media (max-width: 768px)": {
            width: "100vw",
            margin: "0 auto",
            paddingRight: "0",
            flexDirection: "column"
        }
    },
    learnMoreAside: {
        flex: "1 1 20%",
        "@media (max-width: 768px)": {
            width: "90vw",
            margin: "0 auto"
        }
    },
    highlight: {
        color: '#E76C61'
    },
    learnMoreAsideList: {
        listStyle: "none",
        padding: "0",
        margin: "50px 0 0 0",
        fontWeight: "900",
        lineHeight: "1.6em",
        textTransform: "uppercase",
        fontSize: "30px"
    },
    horizontalStripe: {
        display: 'flex',
        width: '100%',
        height: "570px",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            height: "auto",
            boxSizing: "borderBox",
            alignItems: "center",
            justifyContent: "center"
        }
    },
    venicePic: {
        background: "url(/img/about-photo-venice.jpg) center no-repeat",
        backgroundSize: "cover",
        flex: 1,
        maxWidth: "810px",
        "@media (max-width: 768px)": {
            width: "100vw",
            height: "69vw",
            maxWidth: 'none'
        }
    },
    trophyHolder: {
        background: "linear-gradient(45deg, #a0c7d8 0%,#d1c6dd 100%)",
        flex: 1.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "flex-start",
        boxSizing: "border-box",
        paddingLeft: "230px",
        position: "relative",
        "@media (max-width: 768px)": {
            height: "500px",
            paddingLeft: 0
        }
    },
    trophy: {
        position: 'absolute',
        left: '15px',
        top: '-75px',
        "@media (max-width: 768px)": {
            top: 'inherit',
            left: 'inherit',
            bottom: '15px',
            right: '15px',
            width: '15vw'
        }
    },
    trophyTitle: {
        width: "100%",
        "@media (max-width: 768px)": {
            width: "50vw",
            margin: "0 0 0 15px !important"
        }
    },
    trophyText: {
        width: "100%",
        "@media (max-width: 768px)": {
            width: "100%"
        }
    },
    spotifyHolder: {
        background: "linear-gradient(45deg, #f8eede 0%,#d6ffd0 100%)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexBasis: '440px',
        width: '440px',
        minWidth: '440px',
        "@media (max-width: 768px)": {
            flexBasis: "auto",
            padding: "30px 0 0 0",
            minWidth: "100vw",
            width: "100vw"
        },
        "@media (min-width: 1025px) and (max-width: 1439px)": {
            display: 'none'
        }
    },
    spotifyTitle: {
        fontSize: "30px"
    },
    spotifyPlugin: {
        marginTop: '30px'
    },
    end: {
        width: "100vw",
        height: "100vh"
    }
});