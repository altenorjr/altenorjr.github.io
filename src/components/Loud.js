import React, { PureComponent } from 'react';

import styles from './Loud.css';

export default class Loud extends PureComponent {
    static propTypes = {

    }
    render = () => (
        <h1 className={styles.text}>
            {this.props.children}
        </h1>
    )
}