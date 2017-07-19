import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom'
import CenteredContent from '../CenteredContent';
import Flexbox from 'flexbox-react';
import Loud from '../Loud';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withRouter(class Iridium10 extends PureComponent {
    render = () => {
        const lang = this.props.location.pathname.split('/')[1];

        return (
            <Flexbox
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="100vh">
                <Loud>
                    <Link to={`/${lang}/contact`}>Let's talk UX.</Link>
                </Loud>                
            </Flexbox>
        );
    }
}))