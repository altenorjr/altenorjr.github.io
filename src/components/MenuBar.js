import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, NavLink } from 'react-router-dom';

import LanguageSwitch from './LanguageSwitch';
import SocialIcons from './SocialIcons';

import styles from './MenuBar.css';

class MenuBar extends PureComponent {
    static propTypes = {
        lightMode: PropTypes.bool
    };

    state = {
        isOpen: false
    };

    toggleMenu = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

    maybeToggleMenu = () => this.state.isOpen && this.toggleMenu();

    render = () => {
        const lang = this.props.match.params.lang;

        return (
            <div>
                <div className={classnames(styles.menuBar, this.state.isOpen && styles.menuBarIsOpen)}>
                    <div className={classnames(styles.topBar, this.state.isOpen && styles.topBarOpen)}>
                        <IconButton onTouchTap={this.toggleMenu}>
                            {!this.state.isOpen && <MenuIcon color={this.props.lightMode ? '#FFF' : '#000'} />}
                            {this.state.isOpen && <CloseIcon />}
                        </IconButton>
                        <h1 className={styles.fntnl} style={{color: !this.state.isOpen && this.props.lightMode ? '#FFF' : '#000' }}>FNTNL</h1>
                        <div className={styles.mainLanguageSwitch}>
                            <LanguageSwitch lightMode={this.props.lightMode} onSelect={this.maybeToggleMenu} />
                        </div>
                    </div>

                    <div className={classnames(styles.menu, this.state.isOpen && styles.menuIsOpen)}>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} md={4} className={styles.menuItem}><Link onClick={this.toggleMenu} to={`/${lang}/work`}>Work</Link></Col>
                                <Col xs={12} md={4} className={styles.menuItem}><Link onClick={this.toggleMenu} to={`/${lang}/contact`}>Contact</Link></Col>
                                <Col xs={12} md={4} className={styles.menuItem}><Link onClick={this.toggleMenu} to={`/${lang}/about`}>About</Link></Col>
                            </Row>

                            <Row className={styles.mobileLanguageSwitch}>
                                <Col xs={8} xsOffset={2} md={4} mdOffset={4}>
                                    <LanguageSwitch onSelect={this.toggleMenu} />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={4} mdOffset={4} className={styles.social}>
                                    <SocialIcons />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MenuBar);