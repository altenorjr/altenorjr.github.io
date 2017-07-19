import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { sparkScrollFactory } from '../Spark';
import withDimensions, { is, atLeast, atMost } from '../hoc/withDimensions';

export default sparkScrollFactory(withDimensions(class Iridium8 extends PureComponent {
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
                src="/img/iridium-merchandising.jpg" 
                style={{
                    margin: 'auto',
                    width: atLeast('lg', this) ? 'auto' : '95vh'
                }} />
        </Flexbox>
    )
}))