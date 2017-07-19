import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import classnames from 'classnames';
import SmallTitle from '../SmallTitle';
import DescriptionText from '../DescriptionText';
import Fade from '../Fade';
import withDimensions, { is, atLeast, atMost } from '../hoc/withDimensions';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withDimensions(class Iridium7 extends PureComponent {
    render = () => (
        <Flexbox
            width="100vw"
            height="100vh"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            style={{
                boxSizing: 'border-box',
                backgroundColor: '#000',
                backgroundImage: 'url(/img/iridium-animated.gif)',
                backgroundSize: atLeast('lg', this) ? 'auto' : '200%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                overflow: 'hidden'
            }}>
            <SmallTitle
                align="left"
                lightMode={true}
                margin={atLeast('lg', this) ? '150px auto 0 auto' : '75px auto 0 auto'}
                titleStyle={{
                    width: atLeast('lg', this) ? '50vw' : '90vw'
                }}>
                Final Version
                </SmallTitle>
            <DescriptionText
                align="left"
                size={20}
                width={atLeast('lg', this) ? '50vw' : '90vw'}
                lightMode={true}>
                The talented <Fade>Taketomi</Fade> added the final touch with a yellow highlight and sexy dents. Motion done by <Fade>Todorov</Fade>
            </DescriptionText>
        </Flexbox>
    )
}))