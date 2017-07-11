import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';

import styles from './Over10Years.css';

class Over10Years extends PureComponent {
    render = () => {
        const lang = this.props.location.pathname.split('/')[1];

        return (
            <Grid className={styles.slide}>
                <Row>
                    <Col xs={10} xsOffset={1}>
                        <h1 className={styles.text}>
                            Over 10 years of experience. <br />
                            <Link to={`/${lang}/contact`}>Let's Talk.</Link>
                        </h1>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default withRouter(Over10Years);