import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import classnames from 'classnames';
import withDimensions, { is, atLeast, atMost } from '../hoc/withDimensions';
import styles from './Iridium5.css';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withDimensions(class Iridium5 extends PureComponent {
    render = () => (
        <Flexbox
            width="100vw"
            height="100vh"
            flexDirection={atLeast('lg', this) ? 'row' : 'column'}
            justifyContent={atLeast('lg', this) ? 'space-around' : 'space-around'}
            alignItems="center">
            <img className={styles.img} alt="" src="/img/iridium-logo-2.png" />
            <img className={styles.img} alt="" src="/img/iridium-logo-3.png" />
            <img className={styles.img} alt="" src="/img/iridium-logo-1.png" />
        </Flexbox>
    )
}))