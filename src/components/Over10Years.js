import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';

import Flexbox from 'flexbox-react';
import CenteredContent from './CenteredContent';
import Loud from './Loud';

class Over10Years extends PureComponent {
    render = () => {
        const lang = this.props.location.pathname.split('/')[1];

        return (
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
                <Loud>
                    Over 10 years of experience. <br />
                    <Link to={`/${lang}/contact`}>Let's Talk.</Link>
                </Loud>
            </Flexbox>
        );
    }
}

export default withRouter(Over10Years);