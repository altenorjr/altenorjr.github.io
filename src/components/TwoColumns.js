import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Flexbox from 'flexbox-react';

import withDimensions, { propTypes, is } from './hoc/withDimensions';

import styles from './TwoColumns.css'

export default withDimensions(class TwoColumns extends PureComponent {
    render = () => (
        <Flexbox
            alignItems="flex-start"
            className={styles.holder}
            flexDirection="row"
            flex={this.props.flex}
            width={this.props.width || '55%'}
            minWidth="600px"
            margin={this.props.margin || '0'}
            justifyContent="space-around">
            <Flexbox flexBasis="48%">
                {this.props.col1}
            </Flexbox>
            <Flexbox flexBasis="48%">
                {this.props.col2}
            </Flexbox>
        </Flexbox>
    )
})