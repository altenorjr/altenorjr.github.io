import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import Title from '../Title';
import DescriptionText from '../DescriptionText';
import Fade from '../Fade';
import withDimensions, { atLeast } from '../hoc/withDimensions';

@withDimensions
export default class Iridium7 extends PureComponent {
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
            <Title mode="small"
                align="left"
                lightMode={true}
                margin={atLeast('lg', this) ? '150px auto 0 auto' : '75px auto 0 auto'}
                titleStyle={{
                    width: atLeast('lg', this) ? '50vw' : '90vw'
                }}>
                Final Version
                </Title>
            <DescriptionText
                align="left"
                size={20}
                width={atLeast('lg', this) ? '50vw' : '90vw'}
                lightMode={true}>
                The talented <Fade>Taketomi</Fade> added the final touch with a yellow highlight and sexy dents. Motion done by <Fade>Todorov</Fade>
            </DescriptionText>
        </Flexbox>
    )
}