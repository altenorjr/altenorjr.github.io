import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'

import styles from './Contact.css';

import SocialIcons from '../components/SocialIcons';

export default class Contact extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => setTimeout(() => this.props.setTopBarLightMode(true), 150)

    render = () => (
        <div className={styles.contact}>
            <div className={styles.content}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h1 className={styles.email}>
                                <MediaQuery minDeviceWidth={1024}>
                                    hello@fntnl.net
                                </MediaQuery>
                                <MediaQuery maxDeviceWidth={1023}>
                                    hello@<br />fntnl.net
                                </MediaQuery>
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1} md={4} mdOffset={4}>
                            <p className={styles.text}>Before the commercials, big event booths, national sport competitions, extensive line of products and...</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <SocialIcons visible lightMode className={styles.social} />
        </div>
    )
}