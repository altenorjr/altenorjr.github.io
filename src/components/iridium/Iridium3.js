import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';

import Title from '../Title';
import DescriptionText from '../DescriptionText';
import TwoColumns from '../TwoColumns';
import withDimensions, { atLeast } from '../hoc/withDimensions';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withDimensions(class Iridium3 extends PureComponent {
    render = () => (
        <Flexbox
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingTop="50px"
            paddingBottom="100px"
            style={{
                backgroundColor: '#E5E5E5',
                boxSizing: 'border-box'
            }}>
            <Flexbox
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                width="50vw"
                margin="0"
                minWidth={atLeast('lg', this) ? "720px" : "100vw"}>
                <Title mode="small"
                    width="90vw"
                    margin={atLeast('lg', this) ? '0' : "0 0 0 15px"}
                    align="left">
                    Branding
                </Title>
                <DescriptionText
                    align="left"
                    size={23}
                    width="100%">
                    Before the commercials, big event booths, national sport competitions, extensive line of products and, ladies and gentlemen, most importantly, before that time Fernando Santo Forte beat the polish Karol Bedorf with a technical K.O. and became the KSW champion under the brand’s team of sponsored atheletes... Before all of those huge things, there was the task of <strong>designing the logo.</strong>
                </DescriptionText>
                {
                    atLeast('lg', this) && (
                        <TwoColumns
                            col1="Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up becoming a multi-"
                            col2="channel demigod brand that just happens to be one of the top 5 supp brands in the country. Yeah, no biggie. I was heavily involved throughout the project, occupying different roles for different problems."
                            width="100%"
                        />
                    )
                }
            </Flexbox>
            {/*
        <Grid className={styles.slide}>
            <Row>
                <Col xs={12} md={6} mdOffset={3}>

                    <h2 className={styles.title}>Branding</h2>

                    <p className={styles.text}>Before the commercials, big event booths, national sport competitions, extensive line of products and, ladies and gentlemen, most importantly, before that time Fernando Santo Forte beat the polish Karol Bedorf with a technical K.O. and became the KSW champion under the brand’s team of sponsored atheletes... Before all of those huge things, there was the task of <strong>designing the logo.</strong></p>
                </Col>

                <Col xs={12} md={6} mdOffset={3}>
                    <MediaQuery minDeviceWidth={1024}>
                        <Grid fluid className={styles.noPadding}>
                            <Row className={styles.noPadding}>
                                <Col xs={6} className={classnames(styles.columns)}>
                                    Iridium Labs was my first long term project as a designer. For what started as the creation of a supplement brand reacting to the “then” trend of fitness enthusiasts in Brazil, ended up becoming a multi-
                            </Col>
                                <Col xs={6} className={classnames(styles.columns)}>
                                    channel demigod brand that just happens to be one of the top 5 supp brands in the country. Yeah, no biggie. I was heavily involved throughout the project, occupying different roles for different problems.
                            </Col>
                            </Row>
                        </Grid>
                    </MediaQuery>
                </Col>
            </Row>
        </Grid>
        */}
        </Flexbox>
    )
}))