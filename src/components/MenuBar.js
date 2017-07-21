import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
// import { StyleSheet } from 'react-look';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, NavLink } from 'react-router-dom';

import LanguageSwitch from './LanguageSwitch';
import Menu from './Menu';
import withDimensions, { atLeast, atMost } from './hoc/withDimensions';

import styles from './MenuBar.css';

export default withDimensions(withRouter(
    class MenuBar extends PureComponent {
        static propTypes = {
            lightMode: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['l', 'r'])])
        };

        state = {
            isOpen: false
        };

        styles = {
            homeLink: (light) => ({
                color: light ? '#FFF' : '#000',
                textDecoration: 'none'
            })
        }

        toggleMenu = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

        maybeToggleMenu = () => this.state.isOpen && this.toggleMenu();

        home = () => `/${this.props.location.pathname.split('/')[1]}`;

        isLightMode = (side) => this.props.menuBarIsOpen ? false : this.props.lightMode;

        render = () => (
            <div className={classnames(styles.menuBar, this.state.isOpen && styles.menuBarIsOpen)}>
                <div className={classnames(styles.topBar, this.state.isOpen && styles.topBarOpen)}>
                    <IconButton onTouchTap={this.toggleMenu}>
                        {!this.state.isOpen && <MenuIcon color={this.props.lightMode === true || this.props.lightMode === 'l' ? '#FFF' : '#000'} />}
                        {this.state.isOpen && <CloseIcon />}
                    </IconButton>
                    <h1 className={styles.fntnl} style={{ color: !this.state.isOpen && (this.props.lightMode === true || this.props.lightMode === 'l') ? '#FFF' : '#000' }}>
                        <Link onClick={this.maybeToggleMenu} style={this.styles.homeLink(!this.state.isOpen && (this.props.lightMode === true || this.props.lightMode === 'l'))} to={this.home()}>
                            FNTNL
                        </Link>
                    </h1>
                    {
                        atLeast('lg', this) && (
                            <div className={styles.mainLanguageSwitch}>
                                <LanguageSwitch lightMode={!this.state.isOpen && (this.props.lightMode === true || this.props.lightMode === 'r')} onSelect={this.maybeToggleMenu} />
                            </div>
                        )
                    }
                </div>
                <Menu isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
            </div>
        )
    }
));