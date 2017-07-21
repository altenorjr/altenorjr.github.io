import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import classnames  from 'classnames';

import styles from './SocialIcons.css';

export default class SocialIcons extends PureComponent {7
    static propTypes = {
        lightMode: PropTypes.bool,
        className: PropTypes.string
    }

    render = () => (
        <div className={classnames(this.props.className, styles.social, styles.center)}>
            <a onClick={this.toggleMenu} href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                <img src={`/img/logo-fb${this.props.lightMode ? '-white' : ''}.png`} alt="Facebook" className={styles.socialLink} />
            </a>
            <a onClick={this.toggleMenu} href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
                <img src={`/img/logo-in${this.props.lightMode ? '-white' : ''}.png`} alt="LinkedIn" className={styles.socialLink} />
            </a>
            <a onClick={this.toggleMenu} href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                <img src={`/img/logo-insta${this.props.lightMode ? '-white' : ''}.png`} alt="LinkedIn" className={styles.socialLink} />
            </a>
        </div>
    )
}