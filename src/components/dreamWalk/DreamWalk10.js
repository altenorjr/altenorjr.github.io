import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Flexbox from 'flexbox-react';
import FullSizeContainer from '../FullSizeContainer';
import Loud from '../Loud';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withRouter(class DreamWalk10 extends PureComponent {
    render = () => {
        const lang = this.props.location.pathname.split('/')[1];

        return (
            <Flexbox
                flexDirection="column"
                height="100vh"
                width="100vw"
                alignItems="center"
                justifyContent="center"
                style={{
                    backgroundColor: "#FFF"
                }}>
                <Loud>
                    <Link to={`/${lang}/contact`}>Let's talk app design.</Link>
                </Loud>
            </Flexbox>
        );
    }
}))