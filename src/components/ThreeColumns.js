import React, { PureComponent } from 'react';
import cx from 'classnames';
import Flexbox from 'flexbox-react';

import withDimensions from './hoc/withDimensions';

import styles from './ThreeColumns.css'

@withDimensions
export default class ThreeColumns extends PureComponent {
    render = () => (
        <Flexbox
            className={styles.holder}
            flexDirection="row"
            flexBasis="150px"
            flex={this.props.flex}
            margin={this.props.margin}
            justifyContent="space-around"
            alignItems="flex-start">
            <Flexbox flex="1" className={cx(styles.col, styles.col1)} >
                {this.props.col1}
            </Flexbox>
            <Flexbox flex="1" className={cx(styles.col, styles.col2)}>
                {this.props.col2}
            </Flexbox>
            <Flexbox flex="1" className={cx(styles.col, styles.col3)}>
                {this.props.col3}
            </Flexbox>            
        </Flexbox>
    )
}