import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import styles from './LanguageSwitch.css';

class LanguageSwitch extends PureComponent {
    static propTypes = {
        lightMode: PropTypes.bool,
        onSelect: PropTypes.func
    }

    static defaultProps = {
        onSelect: () => { }
    }

    selectLanguage = (event) => this.props.onSelect(event);

    render = () => {
        return (
            <div>
                <NavLink style={{ color: this.props.lightMode ? '#FFF' : '#000' }} to="/en" onClick={this.selectLanguage} className={styles.languageItem} activeClassName={styles.languageActive}>EN</NavLink>
                &nbsp;&nbsp;
                <NavLink style={{ color: this.props.lightMode ? '#FFF' : '#000' }} to="/pt" onClick={this.selectLanguage} className=
                    {styles.languageItem} activeClassName={styles.languageActive}>PT</NavLink>
            </div>
        );
    }
};

export default withRouter(LanguageSwitch);