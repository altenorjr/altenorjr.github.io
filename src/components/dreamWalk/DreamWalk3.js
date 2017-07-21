import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Title from '../Title';
import DescriptionText from '../DescriptionText';
import Carousel from '../Carousel';
import withDimensions, { atLeast, atMost, is } from '../hoc/withDimensions';

import styles from './DreamWalk3.css';

@withDimensions
export default class DreamWalk3 extends PureComponent {
    images = [
        "/img/jam-lp-1.png",
        "/img/jam-lp-2.png",
        "/img/jam-lp-3.png",
        "/img/jam-lp-4.png",
        "/img/jam-lp-1.png",
        "/img/jam-lp-2.png",
        "/img/jam-lp-3.png",
        "/img/jam-lp-4.png"
    ]

    render = () => (
        <Flexbox
            width="100vw"
            paddingTop={is('sm', this) ? '75px' : '150px'}
            paddingBottom={is('sm', this) ? '25px' : '50px'}
            flexDirection="column"
            style={{
                backgroundColor: "#D2CFCA"
            }}>
            <Flexbox
                style={{ boxSizing: "border-box" }}
                className={styles.text}
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                paddingTop="10"
                margin={atLeast('lg', this) ? "50px auto" : "initial"}>
                <Title mode="small"
                    align="left"
                    margin={atMost('md', this) ? "75px 0 0 0" : 0}
                    titleStyle={{
                        width: atMost('md', this) ? '90%' : '100%'
                    }}>
                    Product Landing Pages
                    </Title>
                <DescriptionText
                    size={28}
                    width="100%"
                    align="left"
                    margin="20px 0">
                    Since it’s recent release, Jam has been the the number one music app in 26 countries on iTunes, including Australia, New Zealand, USA and Canada.
                    </DescriptionText>
            </Flexbox>
            <Flexbox>
                {
                    atMost('md', this) && (
                        <Carousel
                            margin={50}
                            viewsToShow={1.5}
                            align={0.5}>
                            {
                                this.images.map((src, i) => (
                                    <img key={i} alt="" src={src} />
                                ))
                            }
                        </Carousel>
                    )
                }
                {
                    atLeast('lg', this) && (
                        <Flexbox width="90vw" margin="auto" flex="1" justifyContent="space-around">
                            {
                                this.images.slice(0, 4).map((src, i) => (
                                    <img key={i} alt="" className={styles.img} src={src} />
                                ))
                            }
                        </Flexbox>
                    )
                }
            </Flexbox>
            <Flexbox
                className={styles.text}
                flexDirection="column"
                justifyContent="flex-start"
                paddingTop="10"
                margin="50px auto">
                <Title mode="small" margin={atMost('md', this) ? "50px 0 20px 15px" : "50px 0"}>Record Labels</Title>
                <Grid fluid style={{ margin: 0 }}>
                    <Row>
                        <Col xs={6} md={3} style={{ textAlign: 'center' }}>
                            <img className={styles.recordLabel} src="/img/jam-logo-tun-e-versal.png" alt="" />
                        </Col>
                        <Col xs={6} md={3} style={{ textAlign: 'center' }}>
                            <img className={styles.recordLabel} src="/img/jam-logo-notown.png" alt="" />
                        </Col>
                        <Col xs={6} md={3} style={{ textAlign: 'center' }}>
                            <img className={styles.recordLabel} src="/img/jam-logo-def-jim.png" alt="" />
                        </Col>
                        <Col xs={6} md={3} style={{ textAlign: 'center' }}>
                            <img className={styles.recordLabel} src="/img/jam-logo-ab.png" alt="" />
                        </Col>
                    </Row>
                </Grid>
            </Flexbox>
            <Flexbox
                style={{ boxSizing: "border-box" }}
                className={styles.text}
                flexDirection="column"
                justifyContent="flex-start"
                paddingTop="10"
                margin={atLeast('lg', this) ? "auto" : "20px auto"}>
                <Title mode="small" margin={atMost('md', this) ? "0 0 20px 15px" : "0 0 50px 15px"}>In-App Badges</Title>
                <img src="/img/jam-inapp-badges.png" className={styles.inappBadges} alt="" />
            </Flexbox>
        </Flexbox>
    )
}