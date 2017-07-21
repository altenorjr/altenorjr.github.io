import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';

import withDimensions from '../components/hoc/withDimensions';

import DreamWalk1 from '../components/dreamWalk/DreamWalk1';
import DreamWalk2 from '../components/dreamWalk/DreamWalk2';
import DreamWalk3 from '../components/dreamWalk/DreamWalk3';
import DreamWalk4 from '../components/dreamWalk/DreamWalk4';
import DreamWalk5 from '../components/dreamWalk/DreamWalk5';
import DreamWalk6 from '../components/dreamWalk/DreamWalk6';
import Ending from '../components/Ending';

@withDimensions
export default class DreamWalk extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);

        this.setTopBarLightMode(true);
    }

    setTopBarLightMode = (mode) => this.props.setTopBarLightMode(mode);

    componentWillUnmount = () => window.scrollTo(0, 0);

    render = () => (
        <Flexbox flexDirection="column">
            <DreamWalk1 ref="d1" />
            <DreamWalk2 ref="d2" setTopBarLightMode={this.props.setTopBarLightMode} />
            <DreamWalk3 ref="d3" />
            <DreamWalk4 ref="d4" />
            <DreamWalk5 ref="d5" />
            <DreamWalk6 ref="d6" />
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