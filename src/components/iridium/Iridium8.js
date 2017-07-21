import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import withDimensions, { atLeast } from '../hoc/withDimensions';

@withDimensions
export default class Iridium8 extends PureComponent {
    render = () => (
        <Flexbox 
            width="100vw"
            height="100vh"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            margin="0"
            style={{
                boxSizing: 'border-box',
                overflow: 'hidden'
            }}>
            <img
                alt=""
                src="/img/iridium-merchandising.jpg" 
                style={{
                    margin: 'auto',
                    width: atLeast('lg', this) ? 'auto' : '95vh'
                }} />
        </Flexbox>
    )
}