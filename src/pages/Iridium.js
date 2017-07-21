import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';

import Iridium1 from '../components/iridium/Iridium1';
import Iridium2 from '../components/iridium/Iridium2';
import Iridium3 from '../components/iridium/Iridium3';
import Iridium4 from '../components/iridium/Iridium4';
import Iridium5 from '../components/iridium/Iridium5';
import Iridium6 from '../components/iridium/Iridium6';
import Iridium7 from '../components/iridium/Iridium7';
import Iridium8 from '../components/iridium/Iridium8';
import Iridium9 from '../components/iridium/Iridium9';
import Iridium10 from '../components/iridium/Iridium10';
import Ending from '../components/Ending';

export default class Iridium extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        this.props.setTopBarLightMode(false);
    }

    componentWillUnmount = () => window.scrollTo(0, 0);

    render = () => (
        <Flexbox flexDirection="column">
            <Iridium1 ref="i1" />
            <Iridium2 ref="i2" />
            <Iridium3 ref="i3" />
            <Iridium4 ref="i4" setTopBarLightMode={this.props.setTopBarLightMode} />
            <Iridium5 ref="i5" />
            <Iridium6 ref="i6" />
            <Iridium7 ref="i7" />
            <Iridium8 ref="i8" />
            <Iridium9 ref="i9" />
            <Iridium10 ref="i10" />
            <Ending
                contactLinkText="Let's Talk."
                link="/work"
                linkText="Or browse through another of my work cases"
            >
                Over 10 years of experience.
            </Ending>
        </Flexbox>
    )
}