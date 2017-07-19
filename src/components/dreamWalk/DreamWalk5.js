import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import FullSizeContainer from '../FullSizeContainer';
import CenteredContent from '../CenteredContent';
import SmallTitle from '../SmallTitle';

import styles from './DreamWalk5.css';

export default class DreamWalk5 extends PureComponent {
    render = () => {
        const col = { textAlign: 'center' };
        const grid = { marginTop: 20 }
        const badges = { marginTop: -10 };

        return (
            <FullSizeContainer className={styles.slide}>
                <CenteredContent
                    width={50}
                    widthSm={90}
                    widthUnit="%"
                    height={500}
                    heightSm={400}>
                    <SmallTitle>Record Labels</SmallTitle>
                    <Grid fluid style={grid}>
                        <Row>
                            <Col style={col} xs={6} md={3}>
                                <img src="/img/jam-logo-tun-e-versal.png" alt="" />
                            </Col>
                            <Col style={col} xs={6} md={3}>
                                <img src="/img/jam-logo-notown.png" alt="" />
                            </Col>
                            <Col style={col} xs={6} md={3}>
                                <img src="/img/jam-logo-def-jim.png" alt="" />
                            </Col>
                            <Col style={col} xs={6} md={3}>
                                <img src="/img/jam-logo-ab.png" alt="" />
                            </Col>
                        </Row>
                    </Grid>
                    <SmallTitle margin={50}>In-App Badges</SmallTitle>
                    <Grid fluid style={badges}>
                        <Row>
                            <Col xs={12} style={{}}>
                                <img src="/img/jam-inapp-badges.png" className={styles.inappBadges} alt="" />
                            </Col>
                        </Row>
                    </Grid>
                </CenteredContent>
            </FullSizeContainer>
        )
    };
}