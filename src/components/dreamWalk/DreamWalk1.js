import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { Grid, Col, Row } from 'react-flexbox-grid';
import cx from 'classnames';

import FullSizeContainer from '../FullSizeContainer';
import CenteredContent from '../CenteredContent';
import HorizontalCenter from '../HorizontalCenter';
import VerticalAlign from '../VerticalAlign';
import DescriptionText from '../DescriptionText';
import TwoColumns from '../TwoColumns';
import ThreeColumns from '../ThreeColumns';
import Titan from '../Titan';
import Highlight from '../Highlight';
import withDimensions, { is, atLeast, atMost } from '../hoc/withDimensions';
import { sparkScrollFactory } from '../Spark';
import styles from './DreamWalk1.css';

import Flexbox from 'flexbox-react';

export default sparkScrollFactory(withDimensions(class DreamWalk1 extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    render = () => {
        return (
            <Flexbox
                className={styles.flexbox}
                flexDirection="column"
                style={{
                    backgroundColor: '#E5E5E5'
                }}>
                <Titan 
                    bgColor="#2358CF">
                    Melbourne <br /> Days
                </Titan>
                <Flexbox className={styles.content} flexDirection="column">
                    {
                        atLeast('md', this) && (
                                <Highlight
                                    className={styles.hightlight}
                                    line1="My Work at DreamWalk:"
                                    line2="Good old Melbourne Days" />
                        )
                    }
                    {
                        atLeast('md', this) && (
                                <TwoColumns
                                    flex="5"
                                    col1="Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up becoming a multi-"
                                    col2="channel demigod brand that just happens to be one of the top 5 supp brands in the country. Yeah, no biggie. I was heavily involved throughout the project, occupying different roles for different problems." />                                
                        )
                    }
                    {
                        is('sm', this) && (
                            <Flexbox 
                                width="100%"
                                flex="5"
                                margin="50px auto">
                                <DescriptionText width="100%" marginSm="0 auto" className={styles.mobileContent}>
                                    Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up becoming a multi-channel demigod brand that just happens to be one of the top 5 supp brands in the country. Yeah, no biggie. I was heavily involved throughout the project, occupying different roles for different problems.
                                </DescriptionText>
                            </Flexbox>
                        )
                    }
                    <ThreeColumns
                        col1={(
                            <div>
                                <h3>My roles</h3>
                                <ul>
                                    <li>Branding</li>
                                    <li>UI Design</li>
                                </ul>
                            </div>
                        )}
                        col2={
                            <div>
                                <h3>Duration</h3>
                                <ul>
                                    <li>2 years</li>
                                </ul>
                            </div>
                        }
                        col3={(
                            <div>
                                <h3>Also Here</h3>
                                <ul>
                                    <li>Dreamwalk Interactive</li>
                                </ul>
                            </div>
                        )} />
                </Flexbox>
            </Flexbox>
        );
    }
}))