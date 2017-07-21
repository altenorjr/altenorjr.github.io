import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import Title from '../Title';
import withDimensions, { atLeast } from '../hoc/withDimensions';

@withDimensions
export default class Iridium6 extends PureComponent {
    render = () => (
        <Flexbox 
            width="100vw"
            height="100vh"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{
                boxSizing: 'border-box',
                backgroundColor: '#FCF141'
            }}>
            <Title mode="small"
                align="left"
                margin={atLeast('lg', this) ? '0 0 50px 0' : '0 0 20px 0'}
                titleStyle={{
                    width: atLeast('lg', this) ? '75vw' : '80vw'
                }}>
                Approved Concept
            </Title>
            <img 
                src="/img/iridium-logo-2-approved.png" 
                alt=""
                style={{
                    width: atLeast('lg', this) ? 'auto' : '80vw'
                }} />
        </Flexbox>
    )
}