import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import { Grid, Col, Row } from 'react-flexbox-grid';

import styles from './Iridium2.css';
import withDimensions, { is, atLeast, atMost, width } from '../hoc/withDimensions';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withDimensions(class Iridium2 extends PureComponent {
    render = () => (
        <Flexbox
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingTop="150px"
            paddingBottom="50px"
            style={{
                backgroundColor: '#E5E5E5',
                boxSizing: 'border-box'
            }}>
            <iframe src="https://player.vimeo.com/video/157724818?title=0&byline=0&portrait=0" width={atLeast('lg', this) ? '1000' : width(this)} height={atLeast('lg', this) ? '563' : width(this) / (16/9)} frameBorder="0"></iframe>
            <Flexbox width="1000px">
                <p style={{
                    flex: 1,
                    fontWeight: 200,
                    textAlign: 'right'
                }}>Directed by Carlos Baer</p>
            </Flexbox>
        </Flexbox>
    )
}))