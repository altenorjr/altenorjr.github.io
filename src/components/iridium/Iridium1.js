import React, { PureComponent } from 'react';

import DescriptionText from '../DescriptionText';
import TwoColumns from '../TwoColumns';
import ThreeColumns from '../ThreeColumns';
import Titan from '../Titan';
import Highlight from '../Highlight';
import withDimensions, { is, atLeast } from '../hoc/withDimensions';
import styles from './Iridium1.css';

import Flexbox from 'flexbox-react';

@withDimensions
export default class Iridium1 extends PureComponent {
    static propTypes = {
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
                    bgColor="#FDF141"
                    color="#000">
                    A Titan is <br /> Born
                </Titan>
                <Flexbox className={styles.content} flexDirection="column">
                    {
                        atLeast('md', this) && (
                                <Highlight
                                    className={styles.hightlight}
                                    line1="Made with Iridium:"
                                    line2="The start of something great" />
                        )
                    }
                    {
                        atLeast('md', this) && (
                                <TwoColumns
                                    flex="15"
                                    col1="Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up becoming a multi-"
                                    col2="channel demigod brand that just happens to be one of the top 5 supp brands in the country. Yeah, no biggie. I was heavily involved throughout the project, occupying different roles for different problems." />                                
                        )
                    }
                    {
                        is('sm', this) && (
                            <Flexbox 
                                width="100%"
                                flex="15"
                                margin="auto">
                                <DescriptionText width="100%" marginSm="0 auto" className={styles.mobileContent}>
                                    Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up becoming a multi-channel demigod brand that just happens to be one of the top 5 supp brands in the country. Yeah, no biggie. I was heavily involved throughout the project, occupying different roles for different problems.
                                </DescriptionText>
                            </Flexbox>
                        )
                    }
                    <ThreeColumns
                        flex="1"
                        col1={(
                            <div>
                                <h3>My roles</h3>
                                <ul>
                                    <li>Branding</li>
                                    <li>UI/UX</li>
                                    <li>Package</li>
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
                                    <li>Neon Mystic</li>
                                    <li>Carlos Baer</li>
                                    <li>G Todorov</li>
                                </ul>
                            </div>
                        )} />
                </Flexbox>
            </Flexbox>
        );
    }
}