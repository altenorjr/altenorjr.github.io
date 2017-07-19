import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import classnames from 'classnames';
import { sparkScrollFactory } from '../Spark';
import styles from './Iridium4.css';

export default sparkScrollFactory(class Iridium4 extends PureComponent {
    render = () => (
        <Flexbox
            flexDirection="column"
            margin="0">
            <img className={styles.inspiration} src="/img/img-iridium-inspiration.jpg" />
        </Flexbox>
    )
})