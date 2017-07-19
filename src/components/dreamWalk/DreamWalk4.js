import React, { PureComponent } from 'react';
import { ViewPager, Frame, Track, View } from 'react-view-pager';
import Flexbox from 'flexbox-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import CenteredContent from '../CenteredContent';
import HorizontalCenter from '../HorizontalCenter';
import FullSizeContainer from '../FullSizeContainer';
import SmallTitle from '../SmallTitle';
import DescriptionText from '../DescriptionText';
import Carousel from '../Carousel';
import withDimensions, { atLeast, atMost, is } from '../hoc/withDimensions';
import { sparkScrollFactory } from '../Spark';

import styles from './DreamWalk4.css';

export default sparkScrollFactory(withDimensions(class DreamWalk3 extends PureComponent {
    render = () => {
        const noPadding = { padding: 0 };

        const colStyle = Object.assign({
            textAlign: 'center'
        }, noPadding);

        return (
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
                    <SmallTitle
                        align="left"
                        margin={atMost('md', this) ? "75px 0 0 0" : 0}
                        titleStyle={{
                            width: atMost('md', this) ? '90%' : '100%'
                        }}>
                        Product Landing Pages
                    </SmallTitle>
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
                                <img src="/img/jam-lp-1.png" />
                                <img src="/img/jam-lp-2.png" />
                                <img src="/img/jam-lp-3.png" />
                                <img src="/img/jam-lp-4.png" />
                                <img src="/img/jam-lp-1.png" />
                                <img src="/img/jam-lp-2.png" />
                                <img src="/img/jam-lp-3.png" />
                                <img src="/img/jam-lp-4.png" />
                            </Carousel>
                        )
                    }
                    {
                        atLeast('lg', this) && (
                            <Flexbox width="90vw" margin="auto" flex="1" justifyContent="space-around">
                                <img className={styles.img} src="/img/jam-lp-1.png" />
                                <img className={styles.img} src="/img/jam-lp-2.png" />
                                <img className={styles.img} src="/img/jam-lp-3.png" />
                                <img className={styles.img} src="/img/jam-lp-4.png" />
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
                    <SmallTitle margin={atMost('md', this) ? "50px 0 20px 15px" : "50px 0"}>Record Labels</SmallTitle>
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
                    <SmallTitle margin={atMost('md', this) ? "0 0 20px 15px" : "0 0 50px 15px"}>In-App Badges</SmallTitle>
                    <img src="/img/jam-inapp-badges.png" className={styles.inappBadges} alt="" />
                </Flexbox>
            </Flexbox>
        );
    }
}))