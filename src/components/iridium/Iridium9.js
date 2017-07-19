import React, { PureComponent } from 'react';
import MediaQuery from 'react-responsive';
import { Grid, Col, Row } from 'react-flexbox-grid';
import classnames from 'classnames';
import { sparkScrollFactory } from '../Spark';
import styles from './Iridium9.css';

export default sparkScrollFactory(class Iridium9 extends PureComponent {
    render = () => (
        <div>
            <div className={styles.img} />
        </div>
    )
})